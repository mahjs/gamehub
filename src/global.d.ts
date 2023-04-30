interface Publisher {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  genres: Genre[];
  metacritic: number;
  publishers: Publisher[];
}

interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

interface GameScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
