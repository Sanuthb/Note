interface Note {
    title: string;
    description: string;
    date:string | undefined;
    time:string | undefined;
}

const save_edit_data = (
    note: Note | null,
    editnotetitle: string,
    editnotedesc: string,
    id: string | undefined,
) => {
    if (note && id !== undefined) {
        const updatedNote = {
            title: editnotetitle,
            description: editnotedesc,
        };
        try {
            const storedData = localStorage.getItem("notedata");
            const notes: Note[] = storedData ? JSON.parse(storedData) : [];

            const noteId = parseInt(id);
            if (!isNaN(noteId) && noteId >= 0 && noteId < notes.length) {
                notes[noteId] = { ...updatedNote, date: note.date, time: note.time };
                localStorage.setItem("notedata", JSON.stringify(notes)); 
            } else {
                console.error("Invalid note ID.");
            }
        } catch (error) {
            console.error("Error retrieving or saving notes:", error);
        }
    }
};

export default save_edit_data;
