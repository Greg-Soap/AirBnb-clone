"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Link href="/">
      <Image
        onClick={() => router.push("/")}
        className="hidden md:block cursor-pointer"
        src="/images/logo.svg"
        height="100"
        width="300"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
