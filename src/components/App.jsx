import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Main from './Header/Main';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Main />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/projects" element={'Projects'} />
        <Route path="/project/:id" element={'Projects'} />
        <Route path="/contacts" element={'Projects'} /> */}
      </Routes>
    </Router>
  );
};
