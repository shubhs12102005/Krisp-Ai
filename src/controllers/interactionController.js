import { useState, useRef, useEffect, useCallback } from "react";

export function useAudioDemoController(initialTrackId = "remote-work") {
  const [selectedTrack, setSelectedTrack] = useState(initialTrackId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNoiseSuppressed, setIsNoiseSuppressed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  const audioBeforeRef = useRef(null);
  const audioAfterRef = useRef(null);
  const animFrameRef = useRef(null);

  const baseUrl = "https://krisp.ai/wp-content/themes/krisp-v4";

  // Initialize audio elements
  useEffect(() => {
    const beforeSrc = `${baseUrl}/audios/${selectedTrack}-before.mp3`;
    const afterSrc = `${baseUrl}/audios/${selectedTrack}-after.mp3`;

    if (!audioBeforeRef.current) {
      audioBeforeRef.current = new Audio();
    }
    if (!audioAfterRef.current) {
      audioAfterRef.current = new Audio();
    }

    const before = audioBeforeRef.current;
    const after = audioAfterRef.current;

    const wasPlaying = isPlaying;
    before.pause();
    after.pause();

    before.src = beforeSrc;
    after.src = afterSrc;
    before.load();
    after.load();

    before.muted = isNoiseSuppressed;
    after.muted = !isNoiseSuppressed;

    const onLoadedMetadata = () => {
      setDuration(before.duration || 1);
      setProgress(0);
      setCurrentTime(0);
      if (wasPlaying) {
        before.play().catch(() => {});
        after.play().catch(() => {});
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    before.addEventListener("loadedmetadata", onLoadedMetadata);
    before.addEventListener("ended", onEnded);

    return () => {
      before.removeEventListener("loadedmetadata", onLoadedMetadata);
      before.removeEventListener("ended", onEnded);
    };
  }, [selectedTrack]);

  // Update progress animation
  const updateProgress = useCallback(() => {
    if (audioBeforeRef.current && isPlaying) {
      const cur = audioBeforeRef.current.currentTime;
      const dur = audioBeforeRef.current.duration || 1;
      setCurrentTime(cur);
      setProgress((cur / dur) * 100);
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    } else if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, updateProgress]);

  // Sync mute state when toggle changes
  useEffect(() => {
    if (audioBeforeRef.current && audioAfterRef.current) {
      audioBeforeRef.current.muted = isNoiseSuppressed;
      audioAfterRef.current.muted = !isNoiseSuppressed;
    }
  }, [isNoiseSuppressed]);

  const togglePlay = () => {
    const before = audioBeforeRef.current;
    const after = audioAfterRef.current;
    if (!before || !after) return;

    if (isPlaying) {
      before.pause();
      after.pause();
      setIsPlaying(false);
    } else {
      // Sync times before playing
      after.currentTime = before.currentTime;
      before.play().then(() => {
        after.play().catch(() => {});
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio autoplay restricted, user interaction needed:", err);
      });
    }
  };

  const toggleNoiseSuppression = () => {
    setIsNoiseSuppressed((prev) => !prev);
  };

  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (audioBeforeRef.current && audioAfterRef.current) {
      const newTime = (val / 100) * (audioBeforeRef.current.duration || 1);
      audioBeforeRef.current.currentTime = newTime;
      audioAfterRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const selectTrack = (trackId) => {
    setSelectedTrack(trackId);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioBeforeRef.current) {
        audioBeforeRef.current.pause();
        audioBeforeRef.current.src = "";
      }
      if (audioAfterRef.current) {
        audioAfterRef.current.pause();
        audioAfterRef.current.src = "";
      }
    };
  }, []);

  return {
    selectedTrack,
    selectTrack,
    isPlaying,
    togglePlay,
    isNoiseSuppressed,
    toggleNoiseSuppression,
    progress,
    handleSeek,
    currentTime,
    duration
  };
}
