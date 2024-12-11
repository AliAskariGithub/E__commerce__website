import Link from "next/link";

const TopBar = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="px-4 py-2 text-sm text-center bg-black text-white/90">
        <p>
          Sign up and get 20% off your first order.{" "}
          <Link href={"/sign-up"} className="underline">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};
export default TopBar;
