import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controler.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controler.abort();
  }, []);

  return {
    genres,
    error,
    loading,
  };
};

export default useGenres;
