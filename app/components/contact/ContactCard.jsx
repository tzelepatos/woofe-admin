"use client";
import React, { useState } from "react";
import { sendEmail } from "@/app/actions/contact/_actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "@/components/ui/icons";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormSchema } from "@/app/models/ContactFormSchema";
import {
  showFailToastEmail,
  showSuccessToastEmail,
} from "@/app/components/ToastersCustom";

export default function ContactCard() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onChange",
  });

  async function onSubmit(data) {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      showSuccessToastEmail();
      //   reset();
      return;
    }

    // toast error
    console.log(result?.error);
    showFailToastEmail(error);
    // toast.error("Something went wrong!");
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex justify-center"
          id="contact-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Card className="flex flex-col bg-jimGray  sm:max-w-2xl w-full rounded-3xl">
            <CardHeader>
              <h1 className="flex items-center justify-center sm:justify-start  text-foreground text-md sm:text-3xl">
                Contact&nbsp;
                <strong>Us</strong>
                <Icons.emailOpen className="text-jimOrange ml-2 h-6 w-6" />
              </h1>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="">
                        <Label htmlFor="name">Name</Label>
                        <FormControl>
                          <Input
                            className="bg-background text-foreground"
                            id="name"
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="">
                        <Label htmlFor="email">Email</Label>
                        <FormControl>
                          <Input
                            className="bg-background text-foreground"
                            id="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="">
                        <Label htmlFor="message">Message</Label>
                        <FormControl>
                          <Textarea
                            className="bg-background text-foreground resize-none"
                            id="message"
                            placeholder="Message..."
                            rows="12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <p className="text-sm text-muted-foreground">
                    Your message will be send to the support team.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="signIn"
                size="create"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}
