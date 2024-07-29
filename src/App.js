import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import './App.css';

const theme = createTheme();

const App = () => {
  const [resolution, setResolution] = useState('');

  const handleResolutionChange = (event) => {
    setResolution(event.target.value);
  };

  const renderContent = () => {
    switch (resolution) {
      case '114p':
        return (
          <div className='items-center h-[250px] w-[250px]'>
            <img src="/img/144px.png" alt="Earth 114p" className="h-[250px] w-[250px] rounded-full object-cover object-center" />
          </div>
        );
      case '240p':
        return (
          <div className='items-center h-[250px] w-[250px]'>
            <img src="/img/240.png" alt="Earth 240p" className="h-[250px] w-[250px] rounded-full object-cover object-center" />
          </div>
        );
      case '360p':
        return (
          <div className='items-center h-[250px] w-[250px]'>
            <img src="/img/360.png" alt="Earth 360p" className="h-[250px] w-[250px] rounded-full object-cover object-center" />
          </div>
        );
      case '480p':
        return (
          <div className='items-center h-[250px] w-[250px]'>
            <img src="/img/480.png" alt="Earth 480p" className="h-[250px] w-[250px] rounded-full object-cover object-center" />
          </div>
        );
      case 'FullHD':
        return (
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source src="/img/earth_full_hd.mp4" type="video/mp4" />
            Hãy lựa chọn độ phân giải để thấy Trái Đất này xinh đẹp đến nhường nào!
          </video>
        );
      default:
        return <div className="text-white text-center"> Hãy lựa chọn độ phân giải để thấy Trái Đất này xinh đẹp đến nhường nào!</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="gap-5 h-screen bg-black flex flex-col items-center justify-center">
        <div className="content mt-0 flex-grow flex flex-col items-center justify-center">
          {renderContent()}
          {resolution !== 'FullHD' && (
            <div className="w-full flex justify-center mt-4">
              <FormControl variant="filled" className="m-4 w-[200px] rounded-lg bg-white">
                <InputLabel id="resolution-label">Độ phân giải</InputLabel>
                <Select
                  labelId="resolution-label"
                  id="resolution-select"
                  value={resolution}
                  onChange={handleResolutionChange}
                  
                  className="bg-white "
                >
                  <MenuItem value={'114p'}>114p</MenuItem>
                  <MenuItem value={'240p'}>240p</MenuItem>
                  <MenuItem value={'360p'}>360p</MenuItem>
                  <MenuItem value={'480p'}>480p</MenuItem>
                  <MenuItem value={'FullHD'}>Full HD</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
