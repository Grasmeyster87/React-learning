import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Contacts } from './components/Contacts';

import './App.css';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route element={<Home />} index />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>;
    </BrowserRouter >
  );
}

export default App;
