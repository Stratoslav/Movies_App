export type MovieDetailsTypes = {
  adult: false;
  backdrop_path: '/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg';
  belongs_to_collection: {
    id: 94602;
    name: 'Puss in Boots Collection';
    poster_path: '/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg';
    backdrop_path: '/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg';
  };
  budget: number;
  genres: [{ id: number; name: string }];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [{ id: number; logo_path: string; name: string }];
  production_countries: [{ iso_3166_1: string; name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [{ english_name: string; iso_639_1: string; name: string }];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
type MovieImageBackground = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | any;
  vote_average: number;
  vote_count: number;
  width: number;
};
interface MovieImagePoster extends MovieImageBackground {}
export type MovieImage = {
  backdrops: MovieImageBackground[];
  id: number;
  logos: MovieImagePoster[];
  posters: MovieImagePoster[];
};
