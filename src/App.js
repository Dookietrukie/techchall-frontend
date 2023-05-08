import './App.css';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhoneList from './components/PhoneList';

function App() {
  return (
    <BrowserRouter>
      <Box className="App">
        <Box sx={{
            minHeight: "90vh"
          }}>

          <Navbar />

          <PhoneList />

          </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
