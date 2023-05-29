import { Route, Routes } from "react-router-dom";
import Accordion from "./Accordion/Accordion";
import Modal from "./Modal/Modal";
import FileUpload from "./FileUpload/FileUpload";
import EmailSubscribe from "./EmailSubscribe/EmailSubscribe";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-upload" element={<FileUpload />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/email-subscribe" element={<EmailSubscribe />} />
      </Routes>
    </div>
  );
}

export default App;
