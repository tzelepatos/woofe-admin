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

export default async function Home() {
  const session = await getServerSession({ ...authOptions });

  //Users
  const { count, users, usersWithCredentials, percentageCreatedLastMonth } =
    await getUsersAndCalculatePercentage();
  //Products
  const products = await fetchProducts();
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
          <CardInfo
            title="Products"
            count={products.length}
            subCount1={groomingCount}
            subCount1Text="Grooming"
            subCount2={serviceCount}
            subCount2Text=" Services"
            subCount3={groomingCount}
            subCount3Text=" Supplies"
            subCount4={noServiceCount}
            subCount4Text=" No Service"
            percentageCreatedLastMonth={percentageCreatedLastMonthProducts}
            iconName="product"
          ></CardInfo>
        </div>
        <div className="flex  w-full">
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
