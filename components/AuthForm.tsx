"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { error } from "console";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };
        const newUser = await signUp(userData);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/dashboard"
          className="cursor-pointer flex items-center gap-1 "
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-26 font-semibold text-grey-900">
            {user
              ? "Link Account "
              : type === "sign-in"
              ? "Sign-In"
              : "Sign-Up"}
          </h1>
          <p className="text-16 font-normal text-grey-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          {" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4 justify-between ">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      placeholder="ex: John"
                      lable="First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      placeholder="ex: Doe"
                      lable="Last Name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    placeholder="Enter your specific address"
                    lable="Address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    placeholder="Enter your specific city"
                    lable="City"
                  />

                  <div className="flex gap-4 justify-between ">
                    <CustomInput
                      control={form.control}
                      name="state"
                      placeholder="ex:  NY"
                      lable="State"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      placeholder="ex: 1101"
                      lable="Postal Code"
                    />
                  </div>
                  <div className="flex gap-4 justify-between ">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      placeholder="yyyy-mm-dd"
                      lable="Date Of Birth"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      placeholder="ex: 01234"
                      lable="SSN"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                placeholder="Enter your email"
                lable="Email"
              />
              <CustomInput
                control={form.control}
                name="password"
                placeholder="Enter your password"
                lable="Password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading ...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign-In"
                  ) : (
                    "Sign-Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-grey-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
