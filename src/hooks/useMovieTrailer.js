import { useEffect , useState} from "react";
import { options } from "../constants/constant";

const useMovieTrailer = (id) => {
  const [trailer, setTrailer] = useState(null);
  const movieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    const filterData = json?.results?.filter((item)=> item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    setTrailer(trailer);
  };
  useEffect(() => {
    movieTrailer();
  }, [id]);
  return trailer;
};
export default useMovieTrailer;
