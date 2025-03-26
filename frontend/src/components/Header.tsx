import React from "react";
import Link from "next/link";

const Header = async () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 sticky left-0 right-0 top-0 z-20 border-b bg-background/95 px-4 backdrop-blur">
      <div className="flex h-14 items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tighter md:text-2xl"
        >
          Revest
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/data"
            className="flex items-center gap-2 text-xl font-bold tracking-tighter md:text-2xl"
          >
            Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
