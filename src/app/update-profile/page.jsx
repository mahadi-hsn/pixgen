"use client";
import { UpdateForm } from "@/Components/UpdateForm";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const UpdateProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
//   console.log(user);
  return (
    <div className="mt-10">
      <Card className="w-9/12 mx-auto p-20">
        <div className="flex justify-center items-center flex-col gap-4">
          <Avatar className="w-20 h-20 rounded-full">
            <Avatar.Image
              alt="John Doe"
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
          </Avatar>
          <div className="text-center">
            <p className="text-2xl font-semibold">{user?.name}</p>
            <p className="text-gray-400">{user?.email}</p>
          </div>
          <UpdateForm></UpdateForm>
        </div>
      </Card>
    </div>
  );
};

export default UpdateProfilePage;
