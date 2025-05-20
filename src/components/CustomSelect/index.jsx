export default function CustomSelect({ label, options, onChange, value, icon }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px] flex gap-3 items-center">
        {icon}
        {label}
      </label>
      <select
        onChange={onChange}
        value={value}
        className="w-full h-[45px] outline-none text-[#1f3b57] font-bold font-sans text-[18px] rounded-lg border border-purple-300 p-2 shadow-md focus:ring-1 focus:ring-purple-500 cursor-pointer">
        <option
          value="">Raça...</option>
        {options.map((opcao) => {
          return (
            <option
              key={opcao} value={opcao}>
              {opcao}
            </option>
          )
        })}
      </select>
    </div>

  )
}