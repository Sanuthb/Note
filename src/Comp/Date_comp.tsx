import { useEffect, useState } from "react";

const Date_comp = () => {
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    const time = `${hours}:${formattedMinutes} ${ampm}`;

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const current_date = date.getDate() + " " +monthNames[date.getMonth()] 
    setFormattedDate(current_date)
    setFormattedTime(time);
  }, []);

  return <div className="flex gap-2"><span>{formattedDate}</span><span>{formattedTime}</span></div>;
};

export default Date_comp;
