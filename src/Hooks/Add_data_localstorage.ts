interface NoteData {
    title: string;
    description: string;
  }
  
  function add_data_localstorage(note_data: NoteData) {
    const storedData = localStorage.getItem('notedata');
    let notesArray: NoteData[] = [];
  
    if (storedData) {
      notesArray = JSON.parse(storedData);
    }
  
    notesArray.push(note_data);
  
    localStorage.setItem('notedata', JSON.stringify(notesArray));
  }
  
  export default add_data_localstorage;
  