import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";
import Image from "next/image";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-10">
      <ToastContainer theme="dark" />
      <Header />
      <main className="flex-1">
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}
