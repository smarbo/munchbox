import Layout from "@/components/Layout";
import { ErrorNotification } from "@/components/Notifications";
import { montserrat } from "@/components/Fonts";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout title="Munchbox - Not Found">
      <div className={`NotFound ${montserrat.className}`}>
        <div className="bg-gray-800 text-center flex flex-col translate-y-[35vh] absolute left-[50%] text-gray-400 -translate-x-[50%]  p-12 rounded-2xl">
          The page you requested is only available for users who are logged in.
          <Link href="/auth" className="text-white hover:underline">
            Log In or Sign Up
          </Link>
        </div>
        <ErrorNotification message="Access Denied." />
      </div>
    </Layout>
  );
}
