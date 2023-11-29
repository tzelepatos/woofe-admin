import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cookies } from "next/headers";

//components
import { fetchProducts } from "@/app/actions/products/actions";
import CardInfo from "@/app/components/home/CardInfo";
import {
  calculateProductStats,
  countProductTypes,
} from "@/app/actions/products/actions";
import { getUsersAndCalculatePercentage } from "@/app/actions/home/actions";
import { fetchUserProducts } from "@/app/actions/users/fetchUsers";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role;
  const userId = session?.user?.id;

  //Users
  let count, users, usersWithCredentials, percentageCreatedLastMonth;
  if (userRole === "admin") {
    // Fetch all users and calculate percentage for admin
    ({ count, users, usersWithCredentials, percentageCreatedLastMonth } =
      await getUsersAndCalculatePercentage());
  } else {
    // Provide only the logged-in user's data for non-admin users
    count = 1;
    users = [userId];
    usersWithCredentials = [userId];
    percentageCreatedLastMonth = 0;
  }

  //Products
  let products;
  if (userRole === "admin") {
    let data = await fetchProducts();
    products = JSON.parse(JSON.stringify(data)); //array of objects
  } else {
    let data = await fetchUserProducts(userId);
    products = JSON.parse(JSON.stringify(data.posts));
  }

  // console.log("PL", products);

  const percentageCreatedLastMonthProducts = calculateProductStats(products);
  const { groomingCount, serviceCount, supplyCount, noServiceCount } =
    countProductTypes(products);

  if (!session) return;
  return (
    <div className="space-y-6  flex flex-col ">
      <h2 className="">
        Wellcome, <b>{session?.user?.name || session?.user?.email} !</b>
      </h2>
      <div className="flex flex-col lg:flex-row gap-4    ">
        <div className=" flex  w-full">
          {/* users */}
          <CardInfo
            title="Users"
            count={count}
            subCount1={usersWithCredentials.length}
            subCount1Text=" Credentials"
            subCount2={users.length - usersWithCredentials.length}
            subCount2Text=" Google"
            percentageCreatedLastMonth={percentageCreatedLastMonth}
            iconName="users"
          ></CardInfo>
        </div>
        <div className="flex  w-full">
          {/* products */}
          <CardInfo
            title="Products"
            count={products.length || products.posts.length}
            subCount1={groomingCount}
            subCount1Text="Grooming"
            subCount2={serviceCount}
            subCount2Text=" Services"
            subCount3={supplyCount}
            subCount3Text=" Supplies"
            subCount4={noServiceCount}
            subCount4Text=" No Service"
            percentageCreatedLastMonth={percentageCreatedLastMonthProducts}
            iconName="product"
          ></CardInfo>
        </div>
        <div className="flex  w-full">
          {/* orders */}
          <CardInfo
            title="Orders"
            count={count}
            credentials={usersWithCredentials.length}
            credentialsText="users Credentials"
            google={users.length - usersWithCredentials.length}
            googleText=" Google"
            percentageCreatedLastMonth={percentageCreatedLastMonth}
            iconName="users"
          ></CardInfo>
        </div>
        {/* <div className="bg-jimGrayLight rounded-lg  text-black  ">
          <UserInfo session={session} />
        </div> */}
      </div>
    </div>
  );
}
