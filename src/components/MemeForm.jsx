import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    const getMemeImage = () => {
        // TODO: fetch memes data from API
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        const randomImage = allMemeImages[randomIndex];
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: randomImage.url,
        }));
    };

    return (
        <div>
            <div className="form">
                <div className="d-flex flex-column flex-lg-row p-2">
                    <div className="mb-2 mx-0 me-lg-2 w-100">
                        <input
                            type="text"
                            className="form-control"
                            id="top-text"
                            placeholder="Top text"
                            onChange={handleTextChange}
                            name="topText"
                            value={meme.topText}
                        />
                    </div>
                    <div className="mb-2 mx-0 ms-lg-2 w-100">
                        <input
                            type="text"
                            className="form-control"
                            id="bottom-text"
                            placeholder="Bottom text"
                            onChange={handleTextChange}
                            name="bottomText"
                            value={meme.bottomText}
                        />
                    </div>
                </div>
                <div className="p-2">
                    <button onClick={getMemeImage} className="btn btn-primary d-block w-100 custom-btn">Generate a new meme image ✅</button>
                </div>
            </div>
            <div className="position-relative d-flex justify-content-center mt-3 mb-5 meme">
                <img src={meme.randomImage} className="rounded w-100 meme--image" />
                <h2 className="position-absolute top-0 mt-5 text-white text-center meme--text">{meme.topText}</h2>
                <h2 className="position-absolute bottom-0 mb-5 text-white text-center meme--text">{meme.bottomText}</h2>
            </div>
        </div>
    )
}