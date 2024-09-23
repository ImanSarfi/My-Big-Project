import { BrowserRouter, Route, Routes } from 'react-router-dom';
import English from './English/English';
import Parsian from './Parsian/Parsian';
import Title from './UI/Title';
import AboutmeEng from './English/AboutMeEng/AboutmeEng';
import FlashCartEng from './English/FlashCart/FlashCartEng';
import AboutMeFa from "./Parsian/AboutMeFa/AboutMeFa";
import FlashCartFa from "./Parsian/FlashCartFa/FlashCartFa";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="english" element={<English />}>
          <Route path="aboutmeEng" element={<AboutmeEng />} />
          <Route path="flashcartEng" element={<FlashCartEng />} />
        </Route>
        <Route path="parsian" element={<Parsian />}> 
          <Route path='AboutmeFa' element={<AboutMeFa/>}/> 
          <Route path='flashcartEng' element={<FlashCartFa/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
