"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div
      className="relative w-full h-screen flex justify-center items-center bg-blue-400"
      style={{ backgroundImage: `/Background.png`, backgroundSize: "cover" }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-4xl mx-auto">
        <div className="flex-1 p-8">
          <Image
            src={"/Asset.png"}
            width="100"
            height="100"
            alt="Left Image"
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center py-8 pr-10">
          <div className="mb-8 text-black rounded-lg">
            <Image src={"/logo.png"} width="50" height="50" alt="Left Image" />
            <h1 className="text-3xl font-bold mb-2 mt-8">
              Login with <br /> Microsoft
            </h1>
            <p>
              Click on Sign in with Microsoft to access the mission dashboard
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="bg-gray-200 w-full justify-center text-black px-4 py-2 rounded-lg flex items-center"
          >
            <Image
              src="/Microsoft.png"
              alt="Microsoft Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
