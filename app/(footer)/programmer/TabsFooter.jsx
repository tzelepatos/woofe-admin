import { Button } from "@/components/ui/button";
import innovation from "@/assets/images/footer/innovation-icon.svg";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";

export default function TabsFooter() {
  return (
    <Tabs defaultValue="Skills" className="max-w-6xl pt-12 ">
      {/* What We're Looking For */}
      <h2 className="text-4xl font-bold mt-8 mb-4 pt-12">
        What We're Looking For
      </h2>
      <TabsList className="grid max-w-lg md:grid-cols-4 grid-cols-2 h-full  bg-jimGray ">
        <TabsTrigger
          className="h-10 hover:text-jimOrange hover:font-bold"
          value="Skills"
        >
          Skills
        </TabsTrigger>
        <TabsTrigger
          className="h-10 hover:text-jimOrange hover:font-bold"
          value="Innovation"
        >
          Innovation
        </TabsTrigger>
        <TabsTrigger
          className="h-10 hover:text-jimOrange hover:font-bold"
          value="Role"
        >
          {" "}
          Your Role
        </TabsTrigger>
        <TabsTrigger
          className="h-10 hover:text-jimOrange hover:font-bold"
          value="Us"
        >
          Woofe with Us
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Skills">
        <Card className="bg-background relative">
          <Icons.settings className="z-0 absolute  right-4 top-5 opacity-20 text-jimOrange w-36 " />
          <div className="flex border-2 border-jimGray px-8 py-8 rounded-lg  md:col-span-1 col-span-3  hover:shadow-lg  ">
            <div className="space-y-2 ">
              <h2 className="text-xl font-bold underline decoration-jimOrange">
                Tech Skills and Beyond
              </h2>
              <p className="text-lg">
                While strong programming skills are a must, we're also looking
                for individuals who bring creativity, problem-solving prowess,
                and a genuine love for pets to the table. Whether you're a
                seasoned developer or a coding enthusiast, if you share our
                vision, we want to hear from you.
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="Innovation">
        <Card className="bg-background relative">
          <Icons.innovation className="z-0 absolute  right-4 top-5 opacity-20 text-jimOrange w-28 fill-jimOrange " />
          <div className="flex border-2 border-jimGray px-8 py-8 rounded-lg  md:col-span-1 col-span-3  hover:shadow-lg  ">
            <div className="space-y-2 ">
              <h2 className="text-xl font-bold underline decoration-jimOrange">
                Innovation and Impact
              </h2>
              <p className="text-lg">
                Woofe is not just a grooming platform; it's a commitment to
                pushing the boundaries of what technology can do for pets. If
                you're driven by the desire to innovate and make a positive
                impact on the lives of animals, you'll find a home in our tech
                team.
              </p>
            </div>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="Role">
        <Card className="bg-background relative">
          <Icons.role className="z-0 absolute  right-4 top-8 opacity-20 text-jimOrange w-32 fill-jimOrange" />
          <div className="flex border-2 border-jimGray px-8 py-8 rounded-lg  lg:col-span-1 col-span-3   hover:shadow-lg ">
            <div className="space-y-2 ">
              <h2 className="text-xl font-bold underline decoration-jimOrange">
                Your Role at Woofe
              </h2>
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
        </Card>
      </TabsContent>
      <TabsContent value="Us">
        <Card className="bg-background relative">
          <Icons.pawn className="z-0 absolute  right-4 top-9 opacity-20 text-jimOrange w-40 fill-jimOrange " />
          <div className="flex border-2 border-jimGray px-8 py-8 rounded-lg 2xl:col-span-1 col-span-3  hover:shadow-lg ">
            <div className="space-y-2 ">
              <h2 className="text-xl font-bold underline decoration-jimOrange">
                How to Woofe with Us
              </h2>
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
              <div className="flex justify-start">
                <Link href="/contact">
                  <Button
                    type="button"
                    variant="signIn"
                    size="cancel"
                    className="text-sm sm:text-base mt-2 hover:uppercase"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
