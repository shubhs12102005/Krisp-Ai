import React from "react";

export default function ReviewsSection() {
  return (
    <section className="py-14 bg-white border-b border-[#f4f4f5]">
      <div className="krisp-container text-center flex flex-col items-center">
        <h2 className="text-[22px] md:text-[26px] font-semibold text-[#131032] mb-4">
          Trusted by professionals - see our G2 reviews
        </h2>
        <a
          href="https://www.g2.com/products/krisp/reviews?utm_source=review-widget"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 inline-block"
        >
          <img
            src="https://www.g2.com/products/krisp/widgets/stars?color=blue&type=read"
            alt="Read Krisp reviews on G2"
            className="h-8 md:h-10 w-auto"
          />
        </a>
      </div>
    </section>
  );
}
