interface Props {
  value: string
  placeholder: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export const ChatInput: React.FC<Props> = ({ value, onChange, onSubmit, placeholder }) => {
  return (
    <div className="flex items-end p-2">
                <textarea
                  value={value}
                  className="flex-1 resize-none overflow-hidden border-none bg-transparent px-4 py-3 text-[15px] leading-relaxed text-gray-700 placeholder-gray-400 outline-none focus:outline-none"
                  rows={1}
                  placeholder={placeholder}
                  onChange={(e) => onChange(e.target.value)}
                />
      <button
        onClick={onSubmit}
        disabled={!value.trim()}
        className="disabled:bg-gray-400 disabled:text-gray-200 bg-primary-600 hover:bg-primary-700 rounded-full px-4 py-2 text-white"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  )
}