import { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { UPCOMING_MOVIESURL, options } from "../constants/constant";
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
    const getUpcomingMovies = async()=>{
        const data = await fetch(UPCOMING_MOVIESURL, options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
        console.log(json)
    }
    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies();
    },[])
}

export default useUpcomingMovies
