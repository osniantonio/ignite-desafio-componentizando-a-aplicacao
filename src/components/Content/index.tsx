import "../../styles/content.scss";

import { MovieCard } from "../MovieCard";

import { IContentProps } from "./@interfaces";

export function Content({ selectedGenre, movies }: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
              link={movie.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
