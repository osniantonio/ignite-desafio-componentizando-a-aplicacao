import { useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";

import "./styles/global.scss";
import { IGenreResponseProps, IMovieProps } from "./@interfaces";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>(
    {} as IGenreResponseProps
  );
  const errorHandler = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    api
      .get<IGenreResponseProps[]>("genres")
      .then((response) => {
        setGenres(response.data);
      })
      .catch((e) => errorHandler(e));
  }, []);

  useEffect(() => {
    api
      .get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((e) => errorHandler(e));

    api
      .get<IGenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      })
      .catch((e) => errorHandler(e));
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}
