function fetch_data_byid(id: string) {
    const storedData = localStorage.getItem("notedata");
    const notes = storedData ? JSON.parse(storedData) : [];
    
    const index = parseInt(id, 10);
    return notes[index] || null; 
}

export default fetch_data_byid;
