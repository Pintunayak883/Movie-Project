import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Componets/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import { img_not_available } from "../../Config/Config";

const Series = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [type, setType] = useState("movie");
  const [totalPages, setTotalPages] = useState(1);
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=3c4659d8e11e0cb4b03ade80d2b18869&page=${page}&language=en-US&query=${text}&include_adult=false`
      );
      setContent(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching trending content:", error.message);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, [page, text, type]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTrending();
  };

  return (
    <div className="py-28 px-5 min-h-[100vh] bg-gray-900">
      <div className="w-full md:px-5 pb-5 md:gap-2">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="w-[90%] p-3 border-b rounded-sm bg-transparent text-2xl outline-none text-white"
            placeholder="Search Your Fav."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className="text-white flex gap-4 pt-4 font-bold text-2xl cursor-pointer ">
          <span
            onClick={() => setType("movie")}
            className={`border-b ${
              type === "movie" ? "border-white" : "border-transparent"
            } hover:border-white`}
          >
            Movies
          </span>
          <span
            onClick={() => setType("tv")}
            className={`border-b ${
              type === "tv" ? "border-white" : "border-transparent"
            } hover:border-white`}
          >
            Series
          </span>
        </div>
      </div>
      {text !== "" && (
        <div className="flex flex-wrap justify-around">
          {content.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              type={card.media_type}
              lang={card.original_language}
              title={card.title || card.name}
              rating={parseInt(card.vote_average)}
              img={card.poster_path || img_not_available}
              date={card.release_date || card.first_air_date}
              popularity={card.popularity}
              dsc={card.overview}
            />
          ))}
          <div className="flex items-center justify-center mt-5">
            <Stack spacing={2}>
              <Pagination
                onChange={handlePageChange}
                count={totalPages}
                color="secondary"
                sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
              />
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default Series;
