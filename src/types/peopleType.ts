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
// export interface SearchedMovieType extends Omit<PeopleKnown, 'media_type'> {}
export type PeopleTypes = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: PeopleKnown;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type PeopleDetailsType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: string;
  profile_path: string;
};

interface PersonMovieCast {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  order: number;
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
}
interface PersonMovieCrew extends Omit<PersonMovieCast, 'character' | 'order'> {
  department: string;
  job: string;
}
export type PersonMovie = {
  cast: PersonMovieCast[];
  crew: PersonMovieCrew[];
};
