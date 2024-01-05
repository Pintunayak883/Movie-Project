import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Card = ({ title, img, date, rating, type, popularity, dsc }) => {
  return (
    <>
      <div className="flex max-w-xs w-auto bg-[#111827] shadow-md rounded-lg overflow-hidden mx-auto my-4">
        <div className="w-2 bg-gray-800"></div>
        <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
          <div
            className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
            data-lity
          >
            <div className="poster__info align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6 detail_info">
                <div className="flex flex-col space-y-2 inner">
                  <h3
                    className="text-2xl font-bold text-white"
                    data-unsp-sanitized="clean"
                  >
                    {title}
                  </h3>
                  <div className="mb-0 text-lg text-gray-400">{type}</div>
                </div>
                <div className="flex flex-row justify-between datos">
                  <div className="flex flex-col datos_col">
                    <div className="popularity">{popularity}</div>
                    <div className="text-sm text-gray-400">Popularity:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">{date}</div>
                    <div className="text-sm text-gray-400">Release date:</div>
                  </div>
                  <div className="flex flex-col datos_col">
                    <div className="release">
                      <StarIcon style={{ color: "#FFD700" }} /> {rating}
                    </div>
                    <div className="text-sm text-gray-400">Rating:</div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-gray-400 mb-2">Overview:</div>
                  <p className="text-xs text-gray-100 mb-6">{dsc}</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute inset-0 transform w-full -translate-y-4"
            src={`http://image.tmdb.org/t/p/w342/${img}`}
            style={{ filter: "grayscale(0)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
