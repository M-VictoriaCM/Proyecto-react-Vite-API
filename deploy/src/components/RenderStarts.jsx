import { FaStar, FaStarHalfAlt } from "react-icons/fa";


export const RenderStars = ({vote_average}) => {
    let starts = [];
    for(let i = 1; i <= 10 ; i++){
        if(vote_average >= i*2){
            starts.push(<FaStar key={i} className="start"/>);
        } else if (vote_average >= (i-1)*2 && vote_average < i*2) {
            starts.push(<FaStarHalfAlt key={i} className="starHalf"/>);
        }
    }
    return <div>{starts}</div>;  
}

export default RenderStars;
