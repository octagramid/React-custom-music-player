import React from "react";
import { FaPlay, FaStop } from "react-icons/fa";
const MusicPlayer = () => {
  const [play, setPlay] = React.useState(false);

  const Source = () => (
    <source src="https://octagram.id/audio/audio.mp3" type="audio/mpeg" />
  );
  const audioReff = React.useRef<any>();

  React.useEffect(() => {
    play ? audioReff.current.play() : audioReff.current.pause();
  }, [play]);

  return (
    <div className="fixed bottom-10 right-10 z-40 rounded-full bg-gray-100 p-2 pr-4">
      <audio ref={audioReff}>
        <Source />
      </audio>
      <div className="flex items-center space-x-2">
        <button
          className={`h-[46px] w-[46px] rounded-full border-2 border-[#dbc99c] bg-[#716A59] p-2  ${
            play ? "animate-spin" : ""
          }`}
          onClick={() => setPlay(!play)}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#716A59]">
            {!play ? <FaPlay size={10} /> : <FaStop size={10} />}
          </div>
        </button>
        <div>
          <h1 className="font-mulish text-[16px] font-semibold text-[#716A59]">
            Ed Sheeran
          </h1>
          <p className="font-mulish text-[12px] text-[#716A59]">Perfect</p>
        </div>
      </div>
    </div>
  );
};

export { MusicPlayer };
