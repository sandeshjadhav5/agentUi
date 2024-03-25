import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import SelectScope from "./SelectScope";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/selectscope" element={<SelectScope/>}/>
    </Routes>
  );
}
export default MainRoutes;
