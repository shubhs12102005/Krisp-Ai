import React from "react";

export default function VideoBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f7f8] overflow-hidden">
      <div className="krisp-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-[480px] text-left">
            <h2 className="text-[34px] md:text-[46px] font-semibold leading-[1.2] text-[#131032] mb-6">
              AI for automation, <br />
              while keeping things human
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[32px] text-[#525069]">
              <strong className="text-[#131032]">Laughter detection</strong>
              <br />
              Because emotions add context to conversations...
            </p>
          </div>

          {/* Right Video */}
          <div className="w-full lg:w-[620px] flex justify-center">
            <div className="rounded-[20px] overflow-hidden shadow-xl max-w-full">
              <video
                className="w-full h-auto rounded-[20px]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/video_laughter.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
