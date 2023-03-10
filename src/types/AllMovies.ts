export type AllMovies = {
  adult: boolean;
  backdrop_path: string;
  first_air_date?: string;
  id: number;
  name: string;
  title?: string;
  original_language?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type MoviesSearchType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};

type PeopleKnown = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export interface SearchedMovieType extends Omit<PeopleKnown, 'media_type'> {}