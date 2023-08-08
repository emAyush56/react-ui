import { Route, Routes } from "react-router-dom";
import Accordion from "./Accordion/Accordion";
import Modal from "./Modal/Modal";
import FileUpload from "./FileUpload/FileUpload";
import EmailSubscribe from "./EmailSubscribe/EmailSubscribe";
import Home from "./Home";
import DynamicElement from "./DynamicElement/DynamicElement";
import ImageEasterEgg from "./ImageEasterEgg/ImageEasterEgg";
import CustomDropdown from "./CustomDropdown/CustomDropdown";
import MultiStepQuiz from "./MultiStepQuiz/MultiStepQuiz";
import MultiStepQuiz2 from "./MultiStepQuiz2/MultiStepQuiz2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-upload" element={<FileUpload />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/email-subscribe" element={<EmailSubscribe />} />
        <Route path="/dynamic-element" element={<DynamicElement />} />
        <Route path="/image-easter-egg" element={<ImageEasterEgg />} />
        <Route path="/custom-dropdown" element={<CustomDropdown />} />
        <Route path="/multistep-quiz" element={<MultiStepQuiz />} />
        <Route path="/multistep-quiz-2" element={<MultiStepQuiz2 />} />
      </Routes>
    </div>
  );
}

export default App;
