import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="text-center h-screen my-20">
        <div className="space-y-2">
          <span className="text-base font-semibold">404</span>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Link href="/">Go back to home page</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
