import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";

import Home from "./components/home/home.component";
import ClassesWrapper from "./components/classes/classes-wrapper.component";

import { GlobalStyle } from "./global-styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes/*" element={<ClassesWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
