import "@/app/globals.css";
import Navbar from "@/app/components/NavBar";
import NavLeft from "@/app/components/NavLeft";

export default function LayoutMain({ children }) {
  return (
    <>
      <Navbar />
      {/* bg-jimGrayLight p-2*/}
      <div className=" min-h-screen flex ">
        <div className="hidden md:block">
          <NavLeft />
        </div>
        <div className="bg-background m-2 p-2 rounded-2xl  w-full">
          {/* <div className="bg-background flex-grow mt-2 mr-1 mb-2 rounded-2xl p-4 w-full"></div> */}
          {children}
        </div>
      </div>
    </>
  );
}
