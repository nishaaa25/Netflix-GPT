import { Breathing, Image } from "react-shimmer";
import { Link } from "react-router-dom";

const MovieCard = ({ imgUrl, id }) => {
  return (
    <Link to={"/movie/"+id}>
      <div className="w-[146px] md:w-[186px] object-cover relative hover:border-2 hover:p-1 hover:border-gray-200">
        <Image
          src={"https://image.tmdb.org/t/p/original/" + imgUrl}
          fallback={
            <Breathing width={186} height={270} className="rounded-sm w-[146px] md:[186px] h-[230px] md:h-[270px]" />
          }
          alt="movie poster"
          className="rounded-md"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
