import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="bg-jimGray text-white py-2 container border-t border-black ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4            lg:text-base md:text-sm  text-xs">
            {/* 1rst */}
            <div className="col-span-1 mb-2 md:mb-0  items-center text-foreground font-semibold p-2">
              <h4 className=" text-xl font-bold mb-4">Συνεργάτες</h4>
              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/Information">Θέλεις να πουλάς μέσω Wooff-e; </Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/programmer">Είσαι προγραμματιστής;</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/products">Διαφήμιση</Link>
              </div>
            </div>
            {/* 2nd */}
            <div className="col-span-1 mb-2 md:mb-0  items-center text-foreground font-semibold p-2">
              <h4 className="text-xl font-bold mb-4">Work With Us</h4>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/resource">Πλεονεκτήματα</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/healthplan">Ασφάλεια αγορών Wooff-e</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2">
                <Link href="/individual">Πολιτική επιστροφών</Link>
              </div>
            </div>

            {/* 3rth */}
            <div className="col-span-1 mb-2 md:mb-0  items-center text-foreground font-semibold p-2">
              <h4 className="text-xl font-bold mb-4">Εταιρεία</h4>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/about">About</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/carrer">Work @ Wooff-e</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            {/* 4rd */}
            <div className="col-span-1 mb-2 md:mb-0  items-center text-foreground font-semibold p-2">
              <h4 className="text-xl font-bold mb-4">Help</h4>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/help">FAQ</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/helpSos">Χρειάζεσαι περισσότερη βοήθεια;</Link>
              </div>

              <div className="text-jimOrange hover:underline block mb-2 ">
                <Link href="/Feedback">Feedback</Link>
              </div>
            </div>

            {/* icons */}
            <div className="col-span-1 mb-2 md:mb-0  items-center text-foreground font-semibold p-2  sm:text-3xl text-2xl  ">
              <h4 className="text-xl font-bold mb-4">Βρες μας στα social</h4>
              <div className="flex space-x-4 ">
                <div className="text-jimOrange hover:underline block mb-2 ">
                  <Link
                    href="https://www.facebook.com"
                    className="socialMediaLink"
                  >
                    <AiFillFacebook />
                  </Link>
                </div>
                <div className="text-jimOrange hover:underline block mb-2 ">
                  <Link
                    href="https://www.linkedin.com"
                    className="socialMediaLink"
                  >
                    <span className="socialMediaIcon">
                      <AiFillLinkedin />
                    </span>
                  </Link>
                </div>
                <div className="text-jimOrange hover:underline block mb-2 ">
                  <Link
                    href="https://www.instagram.com"
                    className="socialMediaLink"
                  >
                    <span className="socialMediaIcon">
                      <AiFillInstagram />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4 border-t border-gray-400" />

          <div className="sm:flex flex-wrap justify-between items-center font-semibold text-foreground  lg:text-base md:text-sm  text-xs ">
            <div className="text-sm">
              <p className="lg:text-base md:text-sm  text-xs">
                &copy;{new Date().getFullYear()} Tsoumelekis. All rights
                reserved
              </p>
            </div>
            <div className="flex space-x-4 ">
              <Link href="/terms">
                <p className="text-jimOrange hover:underline">Όροι χρήσης</p>
              </Link>
              <Link href="/privacy">
                <p className="text-jimOrange hover:underline">
                  Πολιτική Απορρήτου
                </p>
              </Link>

              <Link href="/Cookies">
                <p className="text-jimOrange hover:underline">Cookies</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
