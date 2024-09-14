import { BrowserRouter, Route, Routes } from 'react-router-dom';
import English from './English/English';
import Parsian from './Parsian/Parsian';
import Title from './UI/Title';
import AboutmeEng from './English/AboutMeEng/AboutmeEng';
import FlashCartEng from './English/FlashCart/FlashCartEng';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="english" element={<English />} >
          <Route path='aboutmeEng' element={<AboutmeEng />} />
          <Route path='flashcartEng' element={<FlashCartEng/>} />
        </Route>
        <Route path="parsian" element={<Parsian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
