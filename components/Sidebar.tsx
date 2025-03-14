"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <div>
      <section className="sidebar">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="mb-12 cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="logo"
              className="size-[24px] max-xl:size-14 "
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </Link>
          {sidebarLinks.map((items) => {
            const isActive =
              pathname === items.route ||
              pathname.startsWith(`${items.route}/`);
            return (
              <Link
                href={items.route}
                key={items.label}
                className={cn("sidebar-link", {
                  "bg-bank-gradient": isActive,
                })}
              >
                <div className="relative size-6">
                  <Image
                    src={items.imgURL}
                    alt={items.label}
                    fill
                    className={cn({
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {items.label}
                </p>
              </Link>
            );
          })}
          useer
        </nav>
        <Footer user={user} />
      </section>
    </div>
  );
};

export default Sidebar;
