import React from "react";
import { useAudioDemo } from "../../hooks/useAudioDemo";

export default function AudioDemoPlayer({ demoConfig, defaultTrack = "remote-work", isAccent = false }) {
  const {
    selectedTrack,
    selectTrack,
    isPlaying,
    togglePlay,
    isNoiseSuppressed,
    toggleNoiseSuppression,
    progress,
    handleSeek
  } = useAudioDemo(defaultTrack);

  return (
    <div className="bg-[#2a216b] p-6 md:p-8 rounded-[20px] shadow-2xl w-full max-w-[800px] mx-auto text-left">
      <div className="bg-white rounded-[16px] p-6 md:p-8 text-[#131032]">
        <h4 className="text-[20px] font-bold leading-[30px] mb-1">
          {demoConfig.title}
        </h4>
        <p className="text-[16px] md:text-[18px] font-medium text-[#525069] mb-8">
          {demoConfig.subtitle}
        </p>

        {/* Player Box */}
        <div className="bg-[#f7f7f8] rounded-[16px] p-6 mb-8">
          {/* Seek Bar */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress || 0}
              onChange={handleSeek}
              className="krisp-seek w-full cursor-pointer"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-[#614efa] hover:bg-[#4a3bbe] text-white flex items-center justify-center shadow-[0_12px_40px_rgba(97,78,250,0.2)] transition-colors flex-shrink-0 cursor-pointer"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_pause_lg.svg"
                  alt="Pause"
                  className="w-5 h-5 invert"
                />
              ) : (
                <img
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/icon_play_sm_new.svg"
                  alt="Play"
                  className="w-4 h-4 ml-0.5"
                />
              )}
            </button>

            {/* Switch Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:block w-[1px] h-8 bg-[#d3d2d9]"></div>
              <div className="bg-white border border-[#e7e7ea] rounded-[38px] px-4 py-2.5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleNoiseSuppression}
                  className={`krisp-switch ${isNoiseSuppressed ? "" : "off"}`}
                  aria-label="Toggle noise cancellation"
                >
                  <span className="switch-handle"></span>
                </button>
                <strong className="text-[13px] md:text-[14px] font-semibold text-[#525069]">
                  {demoConfig.switchLabel}
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Tracks List */}
        <div>
          <h5 className="text-[14px] font-bold text-center text-[#131032] mb-4">
            {demoConfig.listTitle}
          </h5>

          <ul className="flex flex-wrap items-center justify-center gap-2">
            {demoConfig.tracks.map((track) => {
              const isSelected = selectedTrack === track.id;
              return (
                <li
                  key={track.id}
                  onClick={() => selectTrack(track.id)}
                  className={`px-4 py-2 rounded-[8px] cursor-pointer transition-colors text-[14px] font-semibold flex items-center gap-2 select-none ${
                    isSelected
                      ? "bg-[#7261fb] text-white"
                      : "bg-[#e7e6f1] text-[#131032] hover:bg-[#dedde8]"
                  }`}
                >
                  {isAccent && track.avatar && (
                    <img
                      src={track.avatar}
                      alt={track.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  )}
                  <span>{track.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
