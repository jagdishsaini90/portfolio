"use client"; // Required for Next.js

import { useState, useEffect } from "react";

const useTypingEffect = (text: string, speed = 100, pauseTime = 1000) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect logic
  useEffect(() => {
    if (!isDeleting && index === text.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && index === 0) {
      setTimeout(() => setIsDeleting(false), pauseTime);
      return;
    }

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : prev + text[index]
      );
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearInterval(interval);
  }, [index, isDeleting, text, speed, pauseTime]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

      return { displayText, showCursor }
};

export default useTypingEffect;
