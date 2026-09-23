import React from "react";
import Button from "../common/Button";

export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-32 bg-cover bg-center text-center relative overflow-hidden bg-[#1f1c3c]"
      style={{
        backgroundImage: `url('https://krisp.ai/wp-content/themes/krisp-v4/imgs//home/img_last_desktop.png')`
      }}
    >
      <div className="krisp-container relative z-10 flex flex-col items-center">
        <h2 className="text-[36px] md:text-[52px] font-normal leading-[1.2] text-white mb-10 max-w-[700px]">
          <strong>Your AI teammate</strong> <br />
          for smarter meetings
        </h2>

        <div>
          <Button
            variant="primary"
            href="https://app.krisp.ai/sign-up"
            external
            className="h-[52px] px-8 text-[16px] rounded-[12px] shadow-lg"
          >
            Get Krisp for free
          </Button>
        </div>
      </div>
    </section>
  );
}
