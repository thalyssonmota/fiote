export default function CustomInput({ type, label, placeholder, onChange, value, icon }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="[text-18px] flex gap-2 items-center tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
        {icon}
        {label}</label>
      <input
        className="w-full h-[45px] bg-transparent text-[#1f3b57] text-[16px] rounded-lg pl-2 border border-purple-300 outline-none shadow-md focus:ring-1 focus:ring-purple-600"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
} 