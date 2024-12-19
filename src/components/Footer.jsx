import React from "react";
import { footerLinks } from "../constants/index";
const Footer = () => {
  return (
    <footer className="my-5 px-5 md:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="text-blue underline">Find an Apple store </span> or{" "}
            <span className="text-blue underline"> other retailers </span> near
            you.
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-700" />

        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright &copy; 2025 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <a
                href="#"
                key={link}
                className="text-xs font-semibold text-gray"
              >
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
