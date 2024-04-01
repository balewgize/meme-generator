
export default function Meme() {
    return (
        <>
            <form>
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
                    <button type="submit" className="btn btn-primary d-block w-100 custom-btn">Generate a new meme image ✅</button>
                </div>
            </form>
        </>
    )
}