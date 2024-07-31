import HomeDisplay from "@/components/HomeDisplay";
import LHomeDisplay from "@/components/LHomeDisplay";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
const authKey = JSON.parse(process.env.NEXT_PUBLIC_AUTH_KEY)[0];

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/api/users/login", {
      method: "GET",
      headers: {
        "munchbox-auth-key": authKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
      });
  }, []);

  return (
    <Layout
      title="Munchbox - Recipes made easy."
      topClass="AppContainer overflow-hidden"
    >
      {loggedIn ? <LHomeDisplay /> : <HomeDisplay />}
    </Layout>
  );
}
