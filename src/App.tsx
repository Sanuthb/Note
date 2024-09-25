import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.tsx"
import Edit_note from "./Pages/Edit_note.tsx"
import Add_note from "./Pages/Add_note.tsx"
import View_note from "./Pages/View_note.tsx"

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add_notes" element={<Add_note/>}/>
        <Route path="/view_notes/:id" element={<View_note/>}/>
        <Route path="/edit_notes/:id" element={<Edit_note/>}/>
    </Routes>
  )
}

export default App
