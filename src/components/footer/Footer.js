import React from "react";

import FooterContian from "../footer/footerContian";
import {
  Aboutus,
  CUSTOMER_CARE,
  OFFERS_REWARDS,
  GET_IN_TOUCH,
  SIGNUP_FOR_OUR_NEWSLETTER,
} from "./FooterInfo";

export default function Footer() {
  return (
    <div className="bg-slate-800 text-white ">
      {/* <div className="bg-teal-500 text-white p-2 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm lg:text-base">
        <p>osamcollection123@gmail.com</p>
        <p>Osam Collection</p>
        <p>Call: +91-9129-9129-91</p>
      </div> */}
      <div className="bg-gray-700 text-white  flex flex-wrap justify-center text-xs md:text-sm">
        <p className="p-4">Mumbai</p>
        <p className="p-4">Pune</p>
        <p className="p-4">Delhi</p>
        <p className="p-4">Bangalore</p>
        <p className="p-4">Hyderabad</p>
        <p className="p-4">Chennai</p>
        <p className="p-4">Kolkata</p>
      </div>
      <div className="flex flex-wrap justify-evenly px-4 md:px-10 lg:px-20">
        <FooterContian name="ABOUT US" data={Aboutus} />
        <FooterContian name="CUSTOMER CARE" data={CUSTOMER_CARE} />
        <FooterContian name="OFFERS & REWARDS" data={OFFERS_REWARDS} />
        <FooterContian name="GET IN TOUCH" data={GET_IN_TOUCH} />
        <FooterContian
          className="text-center"
          name="SIGN UP FOR OUR NEWSLETTER"
          data={SIGNUP_FOR_OUR_NEWSLETTER}
        />
      </div>
      <div className="bg-slate-900 text-center py-4">
        <p className="text-xs md:text-sm">
          © 2024 Osam Collection. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
