import useGameTrailer from "../hooks/useGameTrailer";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useGameTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  return first ? <video src={first.data[480]} poster={first.preview} /> : null;
};

export default GameTrailer;
