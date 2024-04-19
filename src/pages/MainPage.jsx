import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import logo from '../assets/CatwikiLogoWhite.svg';

const MainPage = () => {
  const [searchBreed, setSearchBreed] = useState('');
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="main">
      <div className="main__banner">
        <div className="main__banner__background">
          <img src={logo} alt="logo" />
          <p>Get to know more about your cat breed</p>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your breed"
              onChange={(e) => {
                setSearchBreed(e.target.value);
              }}
            />
            <Search />
          </div>
          {/**search responsive */}
          <div className="search__btn"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
