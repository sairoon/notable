import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Notable | Contact</title>
      </Helmet>
        <div className="w-full h-screen flex justify-center items-center dark:bg-[#181a1b]">
          <div className="w-1/3 bg-slate-50 dark:bg-[#1b1d1e] border dark:border-[#363b3d] shadow-md hover:shadow-xl hover:scale-y-105 transition ease-out text-slate-600 rounded-md py-3 px-4 box-border">
            <div>
              <h1 className="text-3xl font-bold text-center dark:text-[#b0aa9f]">
                Contact Me
              </h1>
            </div>
            <hr className="my-2" />
            <div className="text-center">
              <p className="text-xl font-bold mb-3 mt-3 text-gray-600 dark:text-[#b0aa9f]">
                S. M Khaled Mahmud
              </p>
              <p className="text-md font-medium mb-2 dark:text-[#b0aa9f]">
                Mobile:{" "}
                <a href="tel:+8801709771437" className="italic">
                  {" "}
                  +880 170977-1437
                </a>
              </p>
              <p className="text-md font-medium dark:text-[#b0aa9f]">
                Email:{" "}
                <a href="mailto:contact360@sairoon.com">
                  {" "}
                  contact360@sairoon.com
                </a>
              </p>
            </div>
            <br />
            <div className="flex justify-evenly dark:text-[#b0aa9f]">
              <p>Feel free to contact me</p>
              <p>Thank you for visiting Notable</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
