"use client";

import { PauseIcon, PlayIcon, FullscreenIcon } from "lucide-react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

export default function VideoPlayer({ videoKey }: { videoKey: string }) {
  const playerWrapperRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleFullscreen = () => {
    if (screenfull.isEnabled && playerWrapperRef.current) {
      screenfull.toggle(playerWrapperRef.current);
    }
  };
  return (
    <div ref={playerWrapperRef} className="relative aspect-video h-auto w-full">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        muted={true}
        playing={playing}
        controls
        width="100%"
        height="100%"
      />
      <div className="mt-5 flex justify-center gap-10">
        <button
          className="flex items-center gap-5 rounded-lg p-4 hover:bg-[rgba(0,0,0,0.2)]"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? (
            <>
              <PauseIcon size={24} color="white" />
              <span className="text-[24px] text-white">Pause</span>
            </>
          ) : (
            <>
              <PlayIcon size={24} color="white" />
              <span className="text-[24px] text-white">Play</span>
            </>
          )}
        </button>
        <button
          className="flex items-center gap-5 rounded-lg p-4 hover:bg-[rgba(0,0,0,0.2)]"
          onClick={toggleFullscreen}
        >
          <FullscreenIcon size={24} color="white" />
          <span className="text-[24px] text-white">Fullscreen</span>
        </button>
      </div>
    </div>
  );
}
