function fetch_data_localstorage() {
    const storedData = localStorage.getItem("notedata");
    return storedData ? JSON.parse(storedData) : [];
  }
  
  export default fetch_data_localstorage;
  