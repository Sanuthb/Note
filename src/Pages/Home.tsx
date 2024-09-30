import Add_button from "../Comp/Add_button";
import Home_Header from "../Comp/Home_Header";
import Notes_comp from "../Comp/Notes_comp";
const Home = () => {
  return (
    <div className="bg-slate-900 h-[100vh] w-[100%] text-gray-50 relative overflow-hidden md:overflow-y-scroll">
      <Home_Header />
      <div className="p-5 h-full w-full overflow-y-auto pb-16">
        <Notes_comp />
      </div>
      <div className="fixed bottom-0 right-0 m-2">
        <Add_button />
      </div>
    </div>
  );
};

export default Home;
