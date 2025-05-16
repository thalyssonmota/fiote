import CustomFooter from "../CustomFooter";
import Header from "../Header";

export default function PageWrapper({ children, showButton = true, showHeader = true }) {
  return (
    <div className="w-full h-auto min-h-[100vh] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] flex flex-col">
      {showHeader && <Header showButton={showButton} />}
      {children}
      <CustomFooter/>
    </div>
  )
}
