import { useState } from 'react';
import type { Chat } from '~/types/Chat';
import { ChatMessageIA } from '~/services/IAmeChat/ChatMessageIA';

export const useWelcomeHandler = (playAnimation: () => void) => {
  const [chat, setChat] = useState<Chat[]>([]);
  const [textInputChat, setTextInputChat] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const onClick = () => {
    playAnimation();
    setChat((prevChat) => [
      ...prevChat,
      {
        id: prevChat.length + 1,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        results: textInputChat,
      },
    ]);
    setLoading(true);
    setTimeout(async () => {
      try {
        await setMessageIA();
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }, 2000);
    setTextInputChat('');
  };

  const setMessageIA = async () => {
    const ResponseIA = await ChatMessageIA.SendMessage({
      message: textInputChat,
    });
    setChat((prevChat) => [
      ...prevChat,
      {
        id: prevChat.length + 1,
        sender: 'IA',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        results: ResponseIA?.results || '',
      },
    ]);
  };

  return { onClick, chat, textInputChat, setTextInputChat, loading };
};