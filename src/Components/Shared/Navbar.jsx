"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/Assets/logo.png";
import { Avatar, Button, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const isPending = userData.isPending;
  // console.log(isPending);

  const handleSingOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {isPending ? (
            <div className="flex items-center gap-4">
              <Spinner />
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <Avatar className="w-7 h-7 flex justify-center items-center">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSingOut} variant="danger-soft">
                Sign out
              </Button>
            </div>
          ) : (
            <ul className="flex items-center gap-3 text-sm">
              <li>
                <Link href={"/signup"}>
                  <Button>Sign Up</Button>
                </Link>
              </li>
              <li>
                <Link href={"/signin"}>
                  <Button variant="secondary">Sign In</Button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
