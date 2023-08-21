import './Home.scss'

import homeImage from '../../assets/IMG_0472.jpg'

const Home = ({ switchMode }) => {

    return (
        <>
            <section className={`home ${switchMode ? "dark-mode" : ""}`}>
                <div className="content">
                    <h4>Hello I'm</h4>
                    <h1>Kopal Muhamad</h1>
                    <h4>Front-end developer</h4>
                    <p>I'm a person with strong passion in tech,website,fotografi,sports</p>
                    <button>Contact me</button>
                </div>
                <div className="box-image">
                    <img src={homeImage} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home
