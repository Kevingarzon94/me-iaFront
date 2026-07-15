import { useRef } from 'react'
import { useWelcomeAnimation } from '~/pages/Home/hooks/useWelcomeAnimation'
import { useWelcomeHandler } from '~/pages/Home/hooks/useWelcomeHandler'
import { ChatMessage } from '~/pages/Home/components/ChatMessage'
import { WelcomeHeader } from '~/pages/Home/components/WelcomeHeader'
import { WELCOME_TEXT } from '~/pages/Home/constants/welcome.constants'
import { InputSection } from '~/pages/Home/components/InputSection'

export const Welcome = () => {
  const container = useRef<HTMLDivElement>(null)
  const { play } = useWelcomeAnimation(container.current)
  const { onClick, chat, textInputChat, setTextInputChat, loading } =
    useWelcomeHandler(play)

  return (
    <div className="fixed inset-0 flex h-screen flex-col" ref={container}>
      <ChatMessage messages={chat} isLoading={loading} />
      <div className="box from-primary-50 absolute bottom-1/2 left-1/2 flex w-full -translate-x-1/2 translate-y-1/2 items-center bg-gradient-to-br to-neutral-50 text-neutral-900">
        <div className="mx-auto w-full max-w-4xl">
          <WelcomeHeader text={WELCOME_TEXT.title} />
          <InputSection
            textInput={textInputChat}
            setTextInput={setTextInputChat}
            onSubmit={onClick}
            placeholder={WELCOME_TEXT.placeholderInput}
            helpText={WELCOME_TEXT.helpText}
          />
        </div>
      </div>
    </div>
  )
}
