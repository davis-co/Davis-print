import React, { FC, useRef } from "react";

import classNames from "classnames";
import "./componentToPrint.css";
import bg from "assets/backgrounds/print-bg.png";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
type Props = {
  reportDate?: string;
  children?: React.ReactNode;
  title: string;
  websiteAddress: string;
  websiteAddressSize?: string;
  logo: string;
};
const ComponentToPrint: FC<Props> = ({
  reportDate,
  children,
  title,
  websiteAddress,
  websiteAddressSize,
  logo
}) => {
  const mainRef = useRef(null);
  return (
    <div className="print-page-container  ">
      <img src={bg} className="print-page-bg " alt="" />
      <div className="print-page-layout">
        <div className="print-page-line"></div>
        <div
          className="print-page-address"
          style={websiteAddressSize ? { flexBasis: websiteAddressSize } : undefined}
        >
          <h1>{websiteAddress}</h1>
        </div>
      </div>
      <header className="print-page-header print-page-border ">
        <div>
          <p className="pl-4 !text-sm  text-neutral-500">تاریخ : {reportDate}</p>
        </div>

        <h1 className="text-lg font-bold text-neutral-700 ">{title}</h1>
        <img src={logo} alt="" className="h-[75px] p-2 pr-0 " />
      </header>
      <main className="print-page-main print:rtl w-full" ref={mainRef}>
        {children}
      </main>
      <footer className="print-page-footer">
        <div className="print-page-footer-address mr-auto mt-auto flex w-full items-center gap-3 pt-3  leading-[1rem] ">
          <div className="mt-3 flex items-center ">
            <div className="rounded-full bg-[#1e81c0] p-1 ">
              <EnvelopeIcon className="h-4 w-4  text-white" />
            </div>
            <p className="mx-1 text-sm !text-neutral-800 ">info@‌Bmihis.com</p>
          </div>
          <div className="mt-3 flex items-center ">
            <div className="rounded-full bg-[#1e81c0]  p-1">
              <PhoneIcon className="h-4 w-4  text-white " />
            </div>
            <p className="mx-1 text-sm !text-neutral-800">021-61420</p>
          </div>
          <div className="mt-3 flex items-center ">
            <div className="rounded-full bg-[#1e81c0]  p-1">
              <MapPinIcon className="h-4 w-4 text-white" />
            </div>
            <span className="mx-1 text-sm !text-neutral-800">
              تهران، خیابان فردوسی، ساختمان بیمارستان بانک ملی
            </span>
          </div>
        </div>
        <div className="print-page-davis -mb-4 flex flex-col items-center pt-2 text-xxs  leading-3 !text-[#1e81c0]">
          <p className=""> توسعه یافته در داویس</p>
          <p className="">davisco.ir</p>
        </div>
      </footer>
    </div>
  );
};
export default ComponentToPrint;
