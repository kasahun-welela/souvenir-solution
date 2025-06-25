import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
