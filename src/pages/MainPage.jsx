import React, { useEffect, useState } from 'react';
import musicIcon from '../pics/musicIcon.png';
import Song from '../components/Song';

const MainPage = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSongFromStorage = () => {
      const stored = localStorage.getItem("song");
      if (stored) {
        const parsed = JSON.parse(stored);
        setSong(parsed);
      } else {
        setSong(null);
      }
    };

    fetchSongFromStorage(); // initial load

    const interval = setInterval(fetchSongFromStorage, 400); // check every second
    return () => clearInterval(interval); // cleanup
  }, []);


    return (
      song ? (
        <div className="space-y-6 flex flex-col justify-center items-center h-[90vh] w-[90vw]  m-auto ">
  <Song songEntity={song}  solo={true}/>
  </div>
      ) : (
        <div className="space-y-6 flex flex-col justify-center items-center h-[90vh] w-[90vw] border-4 border-black border-dashed m-auto rounded-xl">
          <img src={musicIcon} alt="musicIcon" />
          <div className="text-2xl">Waiting for next song...</div>
        </div>
      )
    );
    
  }
export default MainPage;
