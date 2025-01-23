import Link from "next/link";
import Google from "@/public/icons/Google";
import Github from "@/public/icons/Github";

const Login = () => {
  return (
    <div className="flex flex-col justify-center align-middle h-screen m-auto w-[350px]">
      <p className="text-4xl font-medium text-center mb-5">Welcome Back</p>
      <input
        className="border-2 rounded-md p-3 mb-5"
        placeholder="Email address or Phone number"
        type="text"
      />
      <button className="w-[350px] h-[50px] p-3 border rounded-lg text-white bg-dark-blue mb-4">
        Continue
      </button>
      <p className="text-center">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-dark-blue font-bold mb-4">
          Sign Up
        </Link>
      </p>
      <div className="flex mx-auto mb-6">
        <hr className="w-[120px] my-auto align-middle border-t" />
        <p className="mr-5 ml-5">OR</p>
        <hr className="w-[120px] my-auto align-middle" />
      </div>
      <button className="w-[350px] h-[50px] mb-4 border rounded-lg text-dark-blue flex p-3 justify-center">
        <Google />
        <p className="ml-3">Continue with Google</p>
      </button>
      <button className="w-[350px] h-[50px] border rounded-lg text-dark-blue flex p-3 justify-center">
        <Github />
        <p className="ml-3">Continue with GitHub</p>
      </button>
    </div>
  );
};

export default Login;
