import type { Chat } from '~/types/Chat';
import {Typing} from "~/components/Typing";

interface ChatMessage {
  messages: Chat[];
  isLoading: boolean;
}

export const ChatMessage: React.FC<ChatMessage> = ({ messages, isLoading }) => {
  return (
    <>
      <div className="chat flex-1 overflow-y-auto opacity-0">
        <div className="relative flex items-center pt-20 px-4 sm:px-8 md:px-20 lg:px-52 pb-20">
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id}
                   className={`${message.sender === 'You' ? 'bg-neutral-200' : 'bg-primary-100'} flex items-start gap-2.5 rounded-xl p-4 mb-4 shadow-sm dark:shadow-none`}>
                <div
                  className="flex w-full flex-col border-gray-200 p-4 leading-1.5">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900">
                    {message.sender}
                  </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {message.time}
                  </span>
                  </div>
                  <Typing text={message.results} sender={message.sender}/>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mx-auto w-full rounded-md p-4">
                <div className="flex animate-pulse space-x-4">
                  <div className="size-10 rounded-full bg-gray-400"></div>
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                      </div>
                      <div className="h-2 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};