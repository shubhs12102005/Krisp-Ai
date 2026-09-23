import React from "react";

export default function MobileAppBanner() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="krisp-container">
        <div
          className="rounded-[24px] p-8 md:p-14 text-white relative overflow-hidden bg-[#1f1c3c] bg-cover bg-right-bottom"
          style={{
            backgroundImage: `url('https://krisp.ai/wp-content/themes/krisp-v4/imgs/home/img_mobile_app.png')`,
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="max-w-[500px] text-left relative z-10">
            <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] mb-3 text-white">
              Install Mobile app
            </h2>
            <p className="text-[17px] md:text-[19px] text-white/90 mb-6 font-medium">
              Meetings on the go with the Krisp mobile app!
            </p>

            <ul className="space-y-3 mb-8 text-[15px] md:text-[16px] text-white/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#614efa]"></span>
                Join & capture meetings from mobile
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#614efa]"></span>
                Transcribe in-person meeting
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#614efa]"></span>
                Easily access shared content
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://apps.apple.com/us/app/krisp-ai-meeting-note-taker/id6740535865?mt=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_app_store.svg"
                    alt="App Store"
                    className="h-11"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ai.krisp.krispMobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_google_play.svg"
                    alt="Google Play"
                    className="h-11"
                  />
                </a>
              </div>

              {/* QR Code */}
              <div className="hidden sm:block p-2 bg-white rounded-[12px] shadow-md">
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_mobile_qr.svg"
                  alt="QR code"
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
