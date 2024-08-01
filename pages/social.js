import Layout from "@/components/Layout";
import SocialDisplay from "@/components/SocialDisplay";
require("dotenv").config();

export default function Social() {
  return (
    <Layout
      title="Munchbox - Social."
      topClass="SOCIALPAGE w-full h-screen"
    >
      <SocialDisplay />
    </Layout>
  );
}
