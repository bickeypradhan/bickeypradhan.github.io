import { useState, useEffect, useCallback } from 'react';

export default function TypingAnimation({ strings, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];

    if (!isDeleting) {
      // Typing
      if (charIndex < currentString.length) {
        setDisplayText(currentString.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else {
        // Pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        setDisplayText(currentString.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(false);
        setStringIndex(prev => (prev + 1) % strings.length);
      }
    }
  }, [charIndex, isDeleting, stringIndex, strings, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}
