import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({ noOfStars = 10 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {

        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {


        setHover(rating);
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {

                index += 1; //Star is 1 based so make the array as 1 based index

                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'} //Initially after this 10 inactive stars icons rendered
                    onClick={() => { handleClick(index) }}
                    onMouseMove={() => { handleMouseEnter(index) }} //During this stage states are changed whenever states are changed the components are forced to rerender!!!
                    onMouseLeave={() => { handleMouseLeave() }}
                    size={40}
                />
            })
        }
    </div>
}