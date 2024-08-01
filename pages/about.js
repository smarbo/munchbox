import Layout from "@/components/Layout";
import { montserrat } from "@/components/Fonts";

export default function AboutPage() {
  return (
    <Layout title="Munchbox - About" topClass="ABOUTPAGE w-full h-full">
      <h1 className={`${montserrat.className} font-black text-gray-700 pl-4 pt-16 text-3xl`}>/ABOUT/<br /><span className="text-5xl sm:text-6xl">MUNCHBOX</span></h1>
      <p className={`${montserrat.className} text-gray-700 lg:max-w-[50%] font-semibold pl-4 pt-8`}>
        Welcome to Munchbox! This project started as a personal journey to improve my skills in React and fullstack development.
        As a passionate software developer, I wanted to create something that not only showcased my skills in fullstack development,
        but also brought value through another one of my passions - food. With Munchbox, you can explore, share, and discover new recipes
        through the simple but intuitive UI. Building Munchbox has taught me many things and I hope this can be an inspiration for others.
      </p>
    </Layout>
  )
}
