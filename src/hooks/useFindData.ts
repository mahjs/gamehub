const useFindDataById = (
  data: (Genre | Platform)[],
  id: number | undefined
) => {
  return data.find((d) => d.id === id);
};

export default useFindDataById;
