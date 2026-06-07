import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-tertiary py-6 px-4 md:px-10 border-t border-white-100/10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-col justify-center">
          <p className="text-secondary text-[14px] hover:text-white cursor-pointer transition-colors">
            Terms and Conditions
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-secondary text-[14px] text-center md:text-end">
            © {new Date().getFullYear()} Labeeba Shaikh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;