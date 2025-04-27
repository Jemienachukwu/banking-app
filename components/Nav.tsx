import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Nav = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white ">
      <h1 className="text-2xl font-bold ">logo</h1>
      <div className="flex gap-4">
        <Link
          href="/sign-in"
          className="cursor-pointer flex items-center gap-1 "
        >
          <Button>sign-in</Button>
        </Link>
        <Link
          href="/sign-up"
          className="cursor-pointer flex items-center gap-1 "
        >
          <Button className="form-btn">create account</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
