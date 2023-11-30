import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";
import AccordionFooter from "@/app/components/footer/AccordionFooter";
import { footerText } from "@/app/components/footer/FooterData";

const iconMapping = {
  AiFillFacebook: <AiFillFacebook />,
  AiFillLinkedin: <AiFillLinkedin />,
  AiFillInstagram: <AiFillInstagram />,
  // Add other mappings here...
};

export function Footer() {
  return (
    <>
      <div className="bg-jimGray py-2 container border-t border-black ">
        <div className="container mx-auto">
          <div className="md:hidden">
            <AccordionFooter
              iconMapping={iconMapping}
              footerText={footerText}
            />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:text-base md:text-sm  text-xs">
            {/* 1rst */}
            {Object.values(footerText).map((column, index) => (
              <div
                key={index}
                className="hidden md:block  col-span-1 mb-2 md:mb-0 items-center text-foreground font-semibold p-2"
              >
                <h4 className="text-xl font-bold mb-4">{column.title}</h4>
                <div className="flex">
                  {column.title.toLowerCase().includes("social") &&
                    column.items.map((item, index) => (
                      <div
                        key={index}
                        className=" mb-2 md:mb-0  text-foreground font-semibold p-2 sm:text-3xl text-2xl"
                      >
                        <div className="text-jimOrange hover:underline block mb-2 ">
                          <Link href={item.link} className="text-jimOrange ">
                            {iconMapping[item.icon]}
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
                {!column.title.toLowerCase().includes("social") &&
                  column.items.map((item, index) => (
                    <div
                      key={index}
                      className="text-jimOrange hover:underline block mb-2 "
                    >
                      <Link href={item.link}>{item.text}</Link>
                    </div>
                  ))}
              </div>
            ))}

            {/* icons */}
            {/* <div className=" mb-2 md:mb-0  items-center text-foreground font-semibold p-2  sm:text-3xl text-2xl  ">
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
            </div> */}
          </div>

          <hr className="hidden md:block my-4 border-t border-gray-400" />

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
