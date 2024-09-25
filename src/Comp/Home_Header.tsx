import { FaSearch } from "react-icons/fa";
const Home_Header = () => {
  return (
    <div className="flex justify-between items-center w-[100%] p-3">
        <h1 className="text-4xl tracking-wide">Notes</h1>
        <button className="bg-slate-700 p-1 rounded-lg w-10 h-10 flex justify-center items-center"><FaSearch/></button>
    </div>
  )
}

export default Home_Header
