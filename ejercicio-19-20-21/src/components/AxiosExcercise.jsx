import React, { useState } from "react";
import { getRandomJoke } from "../services/axiosService";
import Joke from "./pure/joke";

const AxiosExcercise = () => {
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [clickDislike, setClickDislike] = useState(false);
    const [clickLike, setClickLike] = useState(false);

    const handleClick = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    setJoke(response.data);
                }
            })
            .catch((error) => alert(error));
        setClickDislike(false);
        setClickLike(false);
    };

    const handleClickLike = () => {
        if (!clickLike) {
            setLikes(likes + 1);
            clickDislike && dislikes > 0 && setDislikes(dislikes - 1);
            setClickLike(true);
            setClickDislike(false);
        }
    };

    const handleClickDislike = () => {
        if (!clickDislike) {
            setDislikes(dislikes + 1);
            clickLike && likes > 0 && setLikes(likes - 1);
            setClickDislike(true);
            setClickLike(false);
        }
    };

    return (
        <div>
            <h1>Axios Exercise</h1>
            {joke != null ? (
                <div>
                    <Joke
                        joke={joke}
                        counterLikes={handleClickLike}
                        counterDislikes={handleClickDislike}
                    ></Joke>
                </div>
            ) : (
                <div>
                    <p>Genere un nuevo chiste</p>
                </div>
            )}
            <button onClick={handleClick}>Generar nuevo chiste</button>
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
        </div>
    );
};

export default AxiosExcercise;
