interface Note {
    title: string;
    description: string;
}

function delete_note(id: string | undefined) {
    if (id) {
        try {
            const storedNote = localStorage.getItem("notedata");
            const notes: Note[] = storedNote ? JSON.parse(storedNote) : [];

            const noteId = parseInt(id);
            if (!isNaN(noteId) && noteId >= 0 && noteId < notes.length) {
                notes.splice(noteId, 1);

                localStorage.setItem("notedata", JSON.stringify(notes));
            } else {
                console.error("Invalid note ID.");
            }
            
        } catch (error) {
            console.error("Error retrieving or updating notes:", error);
        }
    }
}

export default delete_note;
