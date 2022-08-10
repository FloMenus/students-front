import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import StudentsList from "./pages/StudentsList";
import Success from "./pages/Success";

 function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success/:name" element={<Success />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
