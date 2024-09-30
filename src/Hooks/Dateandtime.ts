import { useEffect, useState } from "react";

function dateandtime() {
  const [time, settime] = useState<string>();
  const [currentdate, setcurrentdate] = useState<string>();
  useEffect(() => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    settime(`${hours}:${formattedMinutes} ${ampm}`);
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
    setcurrentdate(date.getDate() + " " + monthNames[date.getMonth()]);
  }, []);

  return {
    time,
    currentdate,
  };
}

export default dateandtime;
