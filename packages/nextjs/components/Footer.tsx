import React from "react";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          {/* Aquí puedes agregar contenido adicional si lo necesitas */}
        </div>
      </div>
      <footer className="footer bg-yellow-300 text-base-content p-10">
        <div className="w-full">
          <ul className="menu menu-horizontal w-full">
            <div className="flex justify-center items-center gap-2 text-sm w-full">
              <div className="flex justify-center items-center gap-2">
                <a
                  className="flex justify-center items-center gap-1"
                  href="https://youtu.be/u4G95vf4Uzo?t=43"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BuidlGuidlLogo className="w-3 h-5 pb-1" />
                  <span className="link">Why PabloDrum name?</span>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </footer>
    </div>
  );
};
