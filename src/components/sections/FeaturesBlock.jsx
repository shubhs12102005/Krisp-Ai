import React from "react";
import { featuresBlockData } from "../../utils/constants";

export default function FeaturesBlock() {
  const featuresBlock = featuresBlockData;

  return (
    <section className="py-20 md:py-28 bg-white border-t border-b border-[#f4f4f5]">
      <div className="krisp-container">
        <h2 className="text-[32px] md:text-[44px] font-normal leading-[1.25] text-center text-[#131032] mb-16">
          <strong>Capture &amp; customize meetings</strong> <br />
          your way.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresBlock.map((block, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] rounded-[20px] p-6 flex flex-col justify-between hover:shadow-md transition-shadow min-h-[360px]"
            >
              <div>
                <h3 className="text-[20px] font-bold text-[#131032] mb-3">
                  {block.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-[#757585] mb-4">
                  {block.desc}
                </p>

                {block.buttonText && (
                  <div className="mb-4">
                    <a
                      href={block.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#614efa] hover:underline font-bold text-[14px]"
                    >
                      {block.buttonText} →
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <img
                  src={block.image}
                  alt={block.title}
                  className="max-h-[140px] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
