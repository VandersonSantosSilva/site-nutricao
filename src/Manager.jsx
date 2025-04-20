import Layout from "./ComponentesJSX/LayoutStart";
import {Routes, Route} from 'react-router-dom';
import Homepage from "./ComponentesJSX/Homepage";

function Manager() {
  return (
    <Routes>
         <Route path="/" element={<Layout/>} />
         <Route path="/Homepage" element={<Homepage/>} />
    </Routes>

  )
}

export default Manager;
