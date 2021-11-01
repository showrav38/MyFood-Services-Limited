import React, { useEffect, useState } from 'react';

const useData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://young-springs-85818.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return [services, setServices];
};

export default useData;
