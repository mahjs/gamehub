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
