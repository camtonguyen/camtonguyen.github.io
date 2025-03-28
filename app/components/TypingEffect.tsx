'use client';

import { useEffect, useState } from 'react';
import { BlinkingCursor } from './BlinkingCursor';

export function TypingEffect({
  words = ['Developer', 'Designer', 'Creator'],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isTyping,
    isPaused,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <div className='font-semibold'>
      <span>{currentText}</span>
      <BlinkingCursor />
    </div>
  );
}

// Example usage in another component:
// <TypingEffect words={['Developer', 'Designer', 'Creator']} typingSpeed={100} deletingSpeed={50} pauseTime={1500} />
