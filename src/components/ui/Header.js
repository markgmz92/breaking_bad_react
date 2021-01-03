import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../img/logo.png';

const Header = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
    };

    fetchItems();
  }, []);

  return (
    <header className="center">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
