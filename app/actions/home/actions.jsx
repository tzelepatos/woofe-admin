import { fetchUsers } from "app/lib/fetchUsers";

export async function getUsersAndCalculatePercentage() {
  // Fetch users
  const { count, users } = await fetchUsers();

  // Filter users with credentials
  const usersWithCredentials = users.filter(
    (user) => user.provider === "credentials"
  );

  // Get the date for one month ago
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // Filter users created in the last month
  const usersCreatedLastMonth = users.filter(
    (user) => new Date(user.createdAt) >= oneMonthAgo
  );

  // Calculate the percentage
  let percentageCreatedLastMonth = 0;
  if (users.length > 0) {
    percentageCreatedLastMonth =
      (usersCreatedLastMonth.length / users.length) * 100;
  }

  return {
    count,
    users,
    usersWithCredentials,
    percentageCreatedLastMonth,
  };
}
