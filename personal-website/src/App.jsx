import React, { useState, useEffect } from 'react';
import Header from "./Header/Header";
import Face from "./Face/Face";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page33";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import './App.css'; // Assuming you have styles for your loading screen here.

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to remove the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="wait">
                     <div className="loading-panel">
                <div className="spinner"></div>
            </div>
            <div className='logo logo-short-screen'>
                <h2 className='logo'>Fiston Karekezi</h2>
            </div>
        </div>
      ) : (
        <>
          <Header />
          <Face />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </>
      )}
    </>
  );
}

export default App;
