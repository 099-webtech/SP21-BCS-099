import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
         setApiData(data);
       
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
      
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <div>
      <h1>OUR DETAILED PRODUCTS</h1>
      <div id="api-data-container">
        {apiData.map((value) => (
          <div key={value.id} className="api-data-item">
            <h2 className="data-User">UserID: {value.userId}</h2>
            <h2 className="data-ID">ID: {value.id}</h2>
            <p className="data-title">TITLE: {value.title}</p>
            <p className="data-body">BODY: {value.body}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ApiData;
