import React from "react";
import { trustedLogos } from "../../utils/constants";

export default function LogoCloud() {
  return (
    <section className="py-12 border-t border-b border-[#f4f4f5] bg-white overflow-hidden">
      <div className="krisp-container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-14 opacity-75 hover:opacity-100 transition-opacity">
          {trustedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-[32px] md:h-[40px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
