// ProgrammerPage.js
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import workWithUs from "@/assets/images/footer/workWithUs.jpg";
import workWithUs2 from "@/assets/images/footer/workWithUs2.jpg";
import workWithUs3 from "@/assets/images/footer/workWithUs3.jpg";
import workWithUs4 from "@/assets/images/footer/workWithUs4.jpg";
import workWithUs5 from "@/assets/images/footer/workWithUs5.jpg";
import advertise2 from "@/assets/images/footer/advertise2.jpg";
import advertise from "@/assets/images/footer/advertise.jpg";
import advertise3 from "@/assets/images/footer/advertise3.jpg";
import Image from "next/image";

// import advertisePublic from "./advertisePublic.jpg";

const AdvertisePage = () => {
  return (
    <div className="space-y-80 p-4">
      {/* banner */}
      <div className="relative flex items-center justify-start w-full h-[700px]  ">
        <Image
          className="rounded-3xl border-2 border-jimOrange object-cover sm:object-center object-top"
          src={advertise}
          // width="100%"
          // height="auto"
          fill
          alt="programmerImage"
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 2200px) 50vw, 33vw"
          placeholder="blur"
        />
        <div className="z-10 bg-jimOrange rounded-r-xl p-6">
          <h1 className=" lg:text-8xl sm:text-6xl text-4xl font-bold text-foreground   ">
            Advertise with us
          </h1>
          <p className="font-bold text-xs sm:text-lg">
            Το #1 ελληνικό pet marketplace στην Ελλάδα!
          </p>
        </div>
      </div>
      {/* grid */}{" "}
      <div className="  space-y-12  flex flex-col justify-center items-center ">
        <h1 className=" lg:text-4xl sm:text-2xl text-lg font-bold text-foreground  items center justify-center flex ">
          Γιατί να γίνεις συνεργάτης του Woofe;
        </h1>
        <div className="  grid sm:grid-rows-3 sm:grid-cols-2 grid-cols-1 grid-rows-6  rounded-xl  bg-jimGrayLight h-screen max-w-6xl">
          <div className="sm:col-start-1 sm:row-start-1 col-span-1 row-start-2  ">
            <div className="items-start justify-center flex flex-col container  h-full max-w-md  ">
              <h2 className="sm:text-lg text-sm font-bold">
                Άμεση αύξηση της απόδοσής σου
              </h2>
              <p className="sm:text-lg text-sm">
                Από την πρώτη κιόλας ημέρα, αυξάνεις τις online πωλήσεις σου και
                κερδίζεις χρήματα.
              </p>
            </div>
          </div>
          <div className="sm:col-start-2 row-start-1  relative ">
            <Image
              className="rounded-3xl object-cover object-center   absolute -right-6 sm:-top-6 -top-2 "
              src={workWithUs2}
              width={800}
              height="auto"
              alt="programmerImage"
              quality={75}
              sizes="33vw"
              placeholder="blur"
            />
          </div>
          <div className="sm:col-start-2 sm:row-start-2 col-span-1 row-start-4  relative">
            <div className="items-start justify-center flex flex-col container max-w-md   h-full">
              <h2 className="sm:text-lg text-sm font-bold">
                Κορυφαία εμπειρία προβολής
              </h2>
              <p className="sm:text-lg text-sm">
                Τα προϊόντα σου προβάλλονται σε εκατομμύρια ενεργούς χρήστες σε
                Ελλάδα και Κύπρο.
              </p>
            </div>
          </div>
          <div className="sm:col-start-1 sm:row-start-2 row-start-3 relative">
            <Image
              className="rounded-3xl   object-cover object-center absolute -left-6 sm:-top-6 -top-0"
              src={workWithUs3}
              width={800}
              height="auto"
              // fill
              alt="programmerImage"
              quality={75}
              sizes="33vw"
              placeholder="blur"
            />
          </div>
          <div className="sm:col-start-1 sm:row-start-3 row-start-6  ">
            <div className="items-start justify-center flex flex-col container max-w-md   h-full ">
              <h2 className="sm:text-lg text-sm font-bold">
                Ευκολία στην καθημερινότητά σου
              </h2>
              <p className="sm:text-lg text-sm">
                Όσο εσύ πουλάς με ευκολία τα προϊόντα σου, εμείς αναλαμβάνουμε
                για σένα τις δύσκολες διαδικασίες και τα επιπλέον κόστη.
              </p>
            </div>
          </div>
          <div className="sm:col-start-2 sm:row-start-3 row-start-5  relative">
            <Image
              className="rounded-3xl  object-cover object-center absolute -right-6 sm:-bottom-4 -bottom-0"
              src={workWithUs5}
              width={800}
              height="auto"
              // fill
              alt="programmerImage"
              quality={75}
              sizes="33vw"
              placeholder="blur"
            />
          </div>
        </div>
        <div>
          <h1 className="pt-12 pb-4 lg:text-4xl sm:text-2xl text-xl font-bold text-foreground  items center justify-center flex ">
            Θέλεις να έρθεις στο Woofe;
          </h1>
          <div className="flex justify-center pb-6">
            <Link href="/contact">
              <Button
                type="button"
                variant="signIn"
                size="create"
                className="text-sm sm:text-base mt-2 hover:uppercase"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisePage;
