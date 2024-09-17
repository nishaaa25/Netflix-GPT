import { useNavigate, useParams } from "react-router-dom";
import RecommendedMovie from "./RecommendedMovie";
import MovieDetails from "./MovieDetails";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const MovieInfo = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  // Handling Click on Home Btn
  const handleBrowsePage = () => {
    navigate("/browse");
  };
  // MovieDetails
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 m-auto relative">
      <div className="m-2 rounded-md overflow-hidden bg-[#181818] ">
        <MovieDetails movieId={movieId} />
        <div className="px-6 md:px-12">
          <p className="font-semibold text-xl mb-1 mt-6">More Like This</p>
          <RecommendedMovie movieId={movieId} />
        </div>
      </div>
      <div
        onClick={handleBrowsePage}
        className="absolute top-1 left-3 cursor-pointer p-1 border-2 border-white rounded-full"
      >
        <HomeOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default MovieInfo;
