import { useEffect, useState } from 'react';

interface Props {
  text: string;
  sender: string;
}

export const Typing: React.FC<Props> = ({ text, sender }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const textArray = text.split('');
  let interval: NodeJS.Timeout;

  useEffect(() => {
    if (sender === 'IA') {
      interval = setInterval(() => {
        setCurrentText((prevLetter) => prevLetter + textArray[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 40);
    }
    if (currentIndex === textArray.length) {
      clearInterval(interval);
    }
    if (sender === 'You') {
      setCurrentText(text);
    }
    return () => clearInterval(interval);
  }, [text, currentText]);

  return (
    <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-neutral-900">
      {currentText}
    </p>
  );
}