import { useEffect, useState } from "react";
import fetch_data_localstorage from "../Hooks/Fetch_data_localstorage";
import { Link } from "react-router-dom";

interface NoteData {
  title: string;
  description: string;
  date:string | undefined;
  time:string | undefined;
}

const Notes_comp = () => {
  const [storeddata, setStoredData] = useState<NoteData[]>([]);

  useEffect(() => {
    const storedData = fetch_data_localstorage();
    setStoredData(storedData);
  }, []);

  const backgroundColorList: string[] = [
    "#87A2FF",
    "#FCCD2A",
    "#640D5F",
    "#D91656",
    "#FF6600",
  ];

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
      {storeddata.length > 0 ? (
        storeddata.map((note, index) => {
          const backgroundColor =
            backgroundColorList[Math.floor(Math.random() * backgroundColorList.length)];

          return (
            <Link
             to={`/view_notes/${index}`}
              key={index}
              className="p-4 h-[fit-content] w-[100%] rounded-md  text-black flex items-baseline justify-center flex-col"
              style={{ backgroundColor }}
            >
              <h1 className="text-xl font-medium text-wrap">{note.title}</h1>
              <p className="text-base mt-1 w-fit">
                {note.description.length > 50
                  ? note.description.slice(0, 10) + "..."
                  : note.description}
              </p>
              <p className="text-right w-full text-md font-medium text-white">{note.date}</p>
            </Link>
          );
        })
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Notes_comp;
