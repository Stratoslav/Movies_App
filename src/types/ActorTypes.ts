export type ActorTypes = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: 'https://film-oflix.org/';
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};
export type ActorsType = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};
