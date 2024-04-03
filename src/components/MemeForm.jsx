import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = useState("");

    const getMemeImage = () => {
        // TODO: fetch memes data from API
        const memesArray = memesData.data.memes
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]
        setMemeImage(randomMeme.url);
    };

    return (
        <div>
            <div className="form">
                <div className="d-flex flex-column flex-lg-row p-2">
                    <div className="mb-2 mx-0 me-lg-2 w-100">
                        <label htmlFor="top-text" className="form-label">Top text</label>
                        <input type="text" className="form-control" id="top-text" placeholder="Shut up" required />
                    </div>
                    <div className="mb-2 mx-0 ms-lg-2 w-100">
                        <label htmlFor="bottom-text" className="form-label">Bottom text</label>
                        <input type="text" className="form-control" id="bottom-text" placeholder="and take my money" required />
                    </div>
                </div>
                <div className="p-2">
                    <button onClick={getMemeImage} className="btn btn-primary d-block w-100 custom-btn">Generate a new meme image ✅</button>
                </div>
            </div>
            <div className="text-center mt-3 mb-5">
                <img src={memeImage} className="rounded" />
            </div>
        </div>
    )
}