import logo from '../assets/meme-generator-logo.png'

export default function Header() {

    return (
        <>
            <nav className="navbar bg-body-secondary custom-navbar">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                        <span className="ms-3">Meme Generator</span>
                    </a>
                    <a className="text-decoration-none" href="https://github.com/balewgize/meme-generator" target="_blank">View on GitHub</a>
                </div>
            </nav>
        </>
    )
}