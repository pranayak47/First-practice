import "./router.css"

import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="main" >
                <div className="Logo" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWf5oBQOeENCX0a80v2lshS2k3HljjkV4BKP6-S2rmga7oNGttqJFaMWGtkyb391i8fg8&usqp=CAU" alt="logo_img" />
                </div>

                <div className="link" >
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>AboutUs</Link>
                    <Link to="/project">/Projects</Link>
                    <Link to="/video">Video</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="login_btn">
                    <button>Login</button>
                </div>
                <div className="hamburger" >
                    <img src="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader.jpg" alt="" />
                </div>
            </div>
            <div className="hero" >
                <div className="div1" >
                    <h1>Be There</h1>
                    <h3>Loren9 kahka afhoiua afc a sduio</h3>
                    <button>See More</button>
                </div>
                <div className="div2">
                    <img src="https://images.pexels.com/photos/6096/hands-people-woman-hand.jpg" alt="" />
                </div>
            </div>
        </>
    )
}