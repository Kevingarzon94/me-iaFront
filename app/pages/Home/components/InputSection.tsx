import { ChatInput } from '~/pages/Home/components/ChatInput'

interface Props {
  textInput: string
  setTextInput: React.Dispatch<React.SetStateAction<string>>
  onSubmit: () => void
  placeholder: string
  helpText: string
}

export const InputSection: React.FC<Props> = ({
  textInput,
  setTextInput,
  onSubmit,
  placeholder,
  helpText,
}) => {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 blur-xl"></div>
      <div className="relative rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-gray-300">
        <ChatInput
          value={textInput}
          onChange={setTextInput}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
      </div>
      <div className="help-text mt-3 text-center">
        <p className="text-xs text-gray-400">{helpText}</p>
      </div>
    </div>
  )
}
