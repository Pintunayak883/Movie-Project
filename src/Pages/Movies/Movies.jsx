import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../Componets/Card/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=3c4659d8e11e0cb4b03ade80d2b18869&page=${page}`
      );
      setContent(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  const handlePageChange = (value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div className="py-28 px-5 min-h-[100vh] bg-gray-900">
      <span className="uppercase flex justify-center font-bold text-white text-2xl p-4 rounded-full">
        DISCOVER Series
      </span>
      <div className="flex flex-wrap justify-around">
        {content.map((card) => (
          <Card
            key={card.id}
            type={card.media_type}
            title={card.title || card.name}
            rating={parseInt(card.vote_average)}
            img={card.poster_path}
            date={card.release_date || card.first_air_date}
            popularity={card.popularity}
            dsc={card.overview}
          />
        ))}
      </div>
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
  );
};

export default Movies;
