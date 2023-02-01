import { Routes, Route } from "react-router-dom";
import Header from "./routes/header/header.component";

import Home from "./routes/home/home.component";
import ClassesWrapper from "./components/classes/classes-wrapper.component";

import { GlobalStyle } from "./global-styles";
import Auth from "./routes/auth/auth.component";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="classes/*" element={<ClassesWrapper />} />
      </Routes>
    </div>
  );
}

export default App;
