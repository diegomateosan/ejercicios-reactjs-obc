import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";

const Joke = ({ joke, counterLikes, counterDislikes }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
            }}
        >
            <ThumbUpIcon
                onClick={counterLikes}
                style={{ color: "blue", cursor: "pointer" }}
            />
            <ThumbDownIcon
                onClick={counterDislikes}
                style={{ color: "tomato", cursor: "pointer" }}
            />
            <p>{joke.value}</p>
        </div>
    );
};

export default Joke;
