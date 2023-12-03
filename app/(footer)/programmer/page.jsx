// ProgrammerPage.js
import React from "react";
import programmerImage from "@/assets/images/footer/programmerDog.png";
import dogProgrammer from "@/assets/images/footer/dogProgrammer.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tabs from "./TabsFooter";

const ProgrammerPage = () => {
  return (
    <div className="  flex items-center justify-start  ">
      {/* <Image
        style={{ display: "flex", flexDirection: "column" }}
        className=" absolute z-0 top-0 sm:opacity-80 border-2 rounded-bl-full  opacity-10 blur-xs"
        src={dogProgrammer}
        width={800}
        alt="programmerImage"
        quality={100}
        priority={true}
      /> */}
      <div className=" p-8  text-foreground z-40">
        <div className=" pb-8  justify-start">
          <div className=" gap-4 items-center">
            <h1 className="sm:text-8xl text-6xl font-bold mb-4 text-jimOrange  ">
              Join Our Woofe Tech Team
            </h1>
            <p className="sm:text-xl text-lg flex  ">
              Joining our tech team means tackling unique challenges at the
              intersection of technology and pet care..
            </p>
          </div>
        </div>

        {/* Why Woofe Tech? */}
        {/* <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center justify-start ">
          Why Woofe Tech?
        </h2> */}
        {/* both */}
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-col-2 gap-4 ">
          {/* 1st */}
          {/* <div className="row-span-1 col-span-1 flex border-2 px-8 py-8 rounded-lg  bg-jimGrayLight  hover:shadow-xl hover:bg-primary/20">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">
                A Paws-itively Unique Challenge
              </h2>
              <p className="text-lg  flex ">
                Joining our tech team means tackling unique challenges at the
                intersection of technology and pet care. From creating
                innovative grooming algorithms to developing user-friendly
                interfaces for our groomers and pet owners, every day brings a
                fresh set of exciting problems to solve.
              </p>
            </div>
          </div> */}
          {/* 2nd */}
          {/* <div className="col-start-1 flex border-foreground border-2 px-8 py-8 rounded-lg  bg-jimOrange  hover:shadow-xl hover:bg-orange-400">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">
                Collaboration with Canine Enthusiasts
              </h2>
              <p className="text-lg">
                Working at Woofe isn't just about code; it's about collaborating
                with a passionate community of pet lovers. Your work will
                directly contribute to enhancing the grooming experience for
                both pets and their owners, fostering stronger bonds and happier
                tails.
              </p>
            </div>
          </div> */}
        </div>

        <Tabs />

        {/* What We're Looking For */}
        {/* <h2 className="text-2xl font-bold mt-8 mb-4 pt-12">
          What We're Looking For
        </h2>

        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-4 grid-cols-1  ">
          <div className="flex border-2 px-8 py-8 rounded-lg  md:col-span-1 col-span-3 hover:shadow-xl hover:bg-jimOrange hover:border-foreground">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">Tech Skills and Beyond</h2>
              <p className="text-lg">
                While strong programming skills are a must, we're also looking
                for individuals who bring creativity, problem-solving prowess,
                and a genuine love for pets to the table. Whether you're a
                seasoned developer or a coding enthusiast, if you share our
                vision, we want to hear from you.
              </p>
            </div>
          </div>

          <div className="flex border-2 px-8 py-8 rounded-lg  md:col-span-1 col-span-3 hover:shadow-xl hover:bg-primary/20">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">Innovation and Impact</h2>
              <p className="text-lg">
                Woofe is not just a grooming platform; it's a commitment to
                pushing the boundaries of what technology can do for pets. If
                you're driven by the desire to innovate and make a positive
                impact on the lives of animals, you'll find a home in our tech
                team.
              </p>
            </div>
          </div>
          <div className="flex border-2 px-8 py-8 rounded-lg  lg:col-span-1 col-span-3  hover:bg-jimOrange hover:border-foreground">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">Your Role at Woofe</h2>
              <p className="text-lg">
                As a member of our tech team, you'll: Collaborate with
                cross-functional teams to design and implement features that
                enhance the grooming experience. Develop and maintain scalable
                solutions to meet the evolving needs of our platform. Contribute
                to the continuous improvement of our codebase through code
                reviews, testing, and optimization.
              </p>
            </div>
          </div>
          <div className="flex border-2 px-8 py-8 rounded-lg 2xl:col-span-1 col-span-3  hover:shadow-xl hover:bg-primary/10">
            <div className="space-y-2 ">
              <h2 className="text-2xl font-bold ">How to Woofe with Us</h2>
              <p className="text-lg">
                Ready to embark on this exciting journey with Woofe? Simply
                apply here and let us know why you're the perfect fit for our
                tech team. Be sure to share your experiences, projects, and what
                excites you about revolutionizing the world of pet grooming
                through technology. At Woofe, we're not just coding; we're
                creating a brighter and more enjoyable future for pets and their
                families. Join us in shaping the next chapter of pet care
                technology! Woofe - Where Innovation Meets Wagging Tails 🐾
              </p>
              <Link href="/contact">
                <Button
                  type="button"
                  variant="signIn"
                  size="cancel"
                  className="text-sm sm:text-base mt-2"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProgrammerPage;
