import { useEffect, useState } from "react";
import fetch_data_localstorage from "../Hooks/Fetch_data_localstorage";
import { Link } from "react-router-dom";

interface NoteData {
  title: string;
  description: string;
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
    <div className="h-full min-h-screen grid grid-cols-2 gap-5">
      {storeddata.length > 0 ? (
        storeddata.map((note, index) => {
          const backgroundColor =
            backgroundColorList[Math.floor(Math.random() * backgroundColorList.length)];

          return (
            <Link
             to={`/view_notes/${index}`}
              key={index}
              className="p-4 w-[fit-content] h-[fit-content] rounded-md text-black"
              style={{ backgroundColor }}
            >
              <h1 className="text-xl font-medium">{note.title}</h1>
              <p className="text-base mt-1">
                {note.description.length > 100
                  ? note.description.slice(0, 10) + "..."
                  : note.description}
              </p>
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
