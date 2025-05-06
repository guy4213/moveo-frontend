import React, { useEffect, useState } from 'react';
import SongService from '../services/songsServices';
import Song from '../components/Song';

const AdminMainPage = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = async (id) => {
    const res = await SongService.getSongById(id);
    localStorage.setItem("song", JSON.stringify(res));
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await SongService.getAllSongs();
        setSongs(response);

        //reset song represented to user to null.
        localStorage.setItem("song", null);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  // Filter songs based on search term for both song name and artist
  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col justify-start items-start m-[5vh]'>
      <input
        className='bg-[#7E6A2514] mx-[3vw] text-lg border-[2px] border-[#7E6A2514] border-solid rounded-md w-[20vw] h-[5vh] outline-none'
        type="text"
        placeholder='Search by song name or artist...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='mt-5'>
        {filteredSongs.map(song => (
          <Song key={song.id} songEntity={song} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default AdminMainPage;
