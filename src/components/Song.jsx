import textLogo from '../pics/textLogo.png';
import videoLogo from '../pics/videoLogo.png';
import musicLogo from '../pics/musicLogo.png';

const Song = ({ songEntity, onClick, solo }) => {
  const imgBaseUrl = import.meta.env.VITE_BE_iMG_URL;

  return (
    <>
      {!solo ? (
        <div
          className="mx-[3vw] w-[90vw] h-[10vh] flex flex-row justify-between items-between gap-[5vw] mt-[1vh] bg-[#7E6A2514] rounded-lg"
          onClick={() => {
            onClick(songEntity.id); // Call the passed-in handler
          }}
        >
          {/* Main clickable song info */}
          <div className="flex flex-row gap-[2vw]">
            <img
              className="p-0 w-[5vw] h-[10vh]"
              src={`${imgBaseUrl}${songEntity.image_path}`}
              alt="image"
            />
            <div className="px-[1vw] py-[3vh]">
              {songEntity.name} - {songEntity.artist}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-[2vw] px-[1vw] py-[1vh]">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent bubbling to parent if needed
                alert('Text button clicked');
              }}
            >
              <img src={textLogo} alt="textlogo" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                alert('Video button clicked');
              }}
            >
              <img src={videoLogo} alt="videologo" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                alert('Music button clicked');
              }}
            >
              <img src={musicLogo} alt="musiclogo" />
            </button>
          </div>
        </div>
      ) : (
       <div className="space-y-10">
          <div className=" text-5xl px-[8vw] text-violet-800  ">
              {songEntity.name} - {songEntity.artist}
            </div>
            {songEntity.lyrics_chords.map((line, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xl font-semibold text-gray-800">
                  <span className="text-xl font-bold">{line.chords.join(' ')}</span>
                </div>
                <div className="text-3xl italic text-gray-600">{line.lyric}</div>
              </div>
            ))}
      </div>
      )}
    </>
  );
};

export default Song;
