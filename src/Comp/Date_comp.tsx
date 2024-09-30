import dateandtime from "../Hooks/Dateandtime";

const Date_comp = () => {

  const {currentdate,time} = dateandtime()

  return <div className="flex gap-2"><span>{currentdate}</span><span>{time}</span></div>;
};

export default Date_comp;
