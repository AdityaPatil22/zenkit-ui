"use client"
import Link from "next/link";
import Google from "@/public/icons/Google";
import Github from "@/public/icons/Github";
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      axios.post("/api/login", {email})
    } catch(error) {
      console.log(error)
    }
  }


  return (
    <div className="flex flex-col justify-center align-middle m-auto w-[350px] mt-[200px] mb-[200px]">
      <p className="text-4xl font-semibold text-center mb-6">Welcome Back</p>
      <form onSubmit={handleSubmit}>
      <input
        className="border-2 rounded-md p-3 mb-5 w-full"
        placeholder="Email address or Phone number"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="w-[350px] h-[50px] p-3 border rounded-lg text-white bg-dark-blue mb-5">
        Continue
      </button>
      </form>
      
      <p className="text-center mb-4">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="font-bold mb-4">
          Sign Up
        </Link>
      </p>
      <div className="flex mx-auto mb-5">
        <hr className="w-[120px] my-auto align-middle border-t" />
        <p className="mr-5 ml-5">OR</p>
        <hr className="w-[120px] my-auto align-middle" />
      </div>
      <button className="w-[350px] h-[50px] mb-4 border rounded-lg flex p-3 justify-center hover:border-dark-blue hover:border-opacity-50">
        <Google />
        <p className="ml-3">Continue with Google</p>
      </button>
      <button className="w-[350px] h-[50px] border rounded-lg flex p-3 justify-center hover:border-dark-blue hover:border-opacity-50">
        <Github />
        <p className="ml-3">Continue with GitHub</p>
      </button>
    </div>
  );
};

export default Login;
