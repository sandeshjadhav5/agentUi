import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import SelectScope from "./SelectScope";
import Mechanical from "./Mechanical";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/selectscope" element={<SelectScope/>}/>
      <Route path="/mechanical" element={<Mechanical/>}/>
    </Routes>
  );
}
export default MainRoutes;
