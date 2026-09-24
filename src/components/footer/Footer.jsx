import React from "react";
import { Link } from "react-router-dom";
import { footerData } from "../../utils/constants";
import AwardsSection from "./AwardsSection";
import Button from "../common/Button";

/**
 * Universal Krisp Footer with certifications, social links, navigation categories, and global CTA.
 */
export default function Footer() {
  const { logo, socials, columns, copyright, address, actions } = footerData;

  return (
    <footer className="bg-[#f4f4f5] pt-16 md:pt-24 pb-12 text-[#131032]">
      <div className="w-[calc(100%-48px)] max-w-[1366px] mx-auto">
        {/* Awards Row */}
        <AwardsSection />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Social Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to={logo.href} className="inline-block mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                width="72"
                height="34"
                className="w-[72px] h-[34px]"
              />
            </Link>

            <div className="flex items-center gap-3.5 mt-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                  aria-label={soc.name}
                >
                  <img
                    src={soc.icon}
                    alt={soc.name}
                    className="w-[18px] h-[18px]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-[15px] font-bold leading-[26px] mb-4 text-[#1a1a22]">
                {col.href ? (
                  <Link to={col.href} className="hover:underline">
                    {col.title}
                  </Link>
                ) : (
                  col.title
                )}
              </div>

              <div className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <div key={lIdx}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] md:text-[14px] leading-[24px] text-[#525069] hover:underline"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[13px] md:text-[14px] leading-[24px] text-[#525069] hover:underline"
                      >
                        {link.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info & CTAs */}
        <div className="pt-8 border-t border-[#e7e7ea] flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 text-[13px] md:text-[14px] text-[#525069]">
          <div>
            <p className="leading-[22px] mb-1">{copyright}</p>
            <p className="leading-[22px] text-[#757585]">{address}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Button
              variant="primary"
              href={actions[0].href}
              className="h-[44px] px-5 rounded-[10px] w-full sm:w-auto text-center"
            >
              {actions[0].text}
            </Button>
            <Button
              variant="dark"
              href={actions[1].href}
              external
              className="h-[44px] px-5 rounded-[10px] w-full sm:w-auto text-center"
            >
              {actions[1].text}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
