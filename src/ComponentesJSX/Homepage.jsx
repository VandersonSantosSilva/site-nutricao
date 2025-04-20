import Styles from "../CSS-Modules/Homepage.module.css";
import LogoTipo from "../Assets/Logo-tipo.png";
import imgHeader01 from "../Assets/1.png";
import imgHeader02 from "../Assets/2.png";
import imgHeader03 from "../Assets/3.png";
import MaternoIcon from '../Assets/MaternoIcon.svg'
import imgAbaut from "../Assets/PersonalAbaut.png"
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Homepage() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const width = window.innerWidth;
    const [ModalOpen, setModalOpen] = useState(null)

    
    const specialization = [
        {
            id: 1,
            icon: MaternoIcon,
            Name: "Materno Infantil",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "pink",
        },

        {
            id: 2,
            icon: MaternoIcon,
            Name: "Materno Infantil",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "orange",
        },

                {
            id: 3,
            icon: MaternoIcon,
            Name: "Materno Infantil",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "green",
        },

        {
            id: 4,
            icon: MaternoIcon,
            Name: "Materno Infantil",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "gray",
        },

]

    return (
        <div className={`${Styles.ContainmerGeneral} animate__animated animate__fadeIn`}>
            {/* NavBar */}
            <nav className={Styles.NavBar}>
                <img src={LogoTipo} alt="Logo-Tipo" />

                <i onClick={() => setMenuOpen(!menuOpen)}>
                    {!menuOpen ? (
                        <HiMenu className="animate__animated animate__fadeInDown" />
                    ) : (
                        <HiMenuAlt1 className="animate__animated animate__fadeInDown" />
                    )}
                </i>

                <ul className={`${width <= 999 && menuOpen ? 'animate__animated animate__fadeInRight' : ''} ${!menuOpen ? Styles.MenuFalse : Styles.MenuTrue}`}>
                    <li onClick={() => navigate(null)}>Inicio</li>
                    <li onClick={() => navigate(null)}>Agendamentos</li>
                    <li onClick={() => navigate(null)}>Currículo</li>
                    <li onClick={() => navigate(null)}>Contatos</li>
                </ul>
            </nav>
            
            {/* Header */}
            <header className={Styles.Header}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={imgHeader01} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={imgHeader02} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={imgHeader03} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>

            {/* Section one */}
            <section className={Styles.SactionOne}>

                    
                <img src={imgAbaut} alt="Abaut"/>
                    

                <div className={Styles.ContainerAbaut}>
                    <h1>Iracema Rocha</h1>
                    <span>Nutricionista</span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis? 
                        Praesentium eveniet eius at enim fugiat ut labore blanditiis ratione. 
                        Nisi quod cum aliquid, odio debitis pariatur fugiat doloribus eligendi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis? 
                        Praesentium eveniet eius at enim fugiat ut labore blanditiis ratione. 
                        Nisi quod cum aliquid, odio debitis pariatur fugiat doloribus eligendi.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis? 
                        Praesentium eveniet eius at enim fugiat ut labore blanditiis ratione. 
                        Nisi quod cum aliquid, odio debitis pariatur fugiat doloribus eligendi.

                    </p>
                </div>
            </section>

             {/* SVG one */}
            <svg
                className={Styles.SvgWave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="50 0 1300 250"
                style={{ width: "100%", height: "auto" }}
            >
                <defs>
                    <linearGradient id="gradient" x1="100%" y1="0%" x2="0" y2="0%">
                        <stop offset="100%" stopColor="#ece5df" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient)"
                    d="M0,0L34.3,40.8C68.6,82,137,163,206,204.2C274.3,245,343,245,411,239.2C480,233,549,222,617,204.2
                    C685.7,187,754,163,823,163.3C891.4,163,960,187,1029,204.2C1097.1,222,1166,233,1234,204.2C1302.9,175,1371,105,1440,75.8
                    C1508.6,47,1577,58,1646,93.3C1714.3,128,1783,187,1851,215.8C1920,245,1989,245,2057,210C2125.7,175,2194,105,2263,116.7
                    C2331.4,128,2400,222,2469,233.3C2537.1,245,2606,175,2674,140C2742.9,105,2811,105,2880,116.7C2948.6,128,3017,152,3086,163.3
                    C3154.3,175,3223,175,3291,175C3360,175,3429,175,3497,180.8C3565.7,187,3634,198,3703,215.8C3771.4,233,3840,257,3909,256.7
                    C3977.1,257,4046,233,4114,210C4182.9,187,4251,163,4320,169.2C4388.6,175,4457,210,4526,227.5C4594.3,245,4663,245,4731,256.7
                    C4800,268,4869,292,4903,303.3L4937.1,315L4937.1,350L4902.9,350C4868.6,350,4800,350,4731,350C4662.9,350,4594,350,4526,350
                    C4457.1,350,4389,350,4320,350C4251.4,350,4183,350,4114,350C4045.7,350,3977,350,3909,350C3840,350,3771,350,3703,350
                    C3634.3,350,3566,350,3497,350C3428.6,350,3360,350,3291,350C3222.9,350,3154,350,3086,350C3017.1,350,2949,350,2880,350
                    C2811.4,350,2743,350,2674,350C2605.7,350,2537,350,2469,350C2400,350,2331,350,2263,350C2194.3,350,2126,350,2057,350
                    C1988.6,350,1920,350,1851,350C1782.9,350,1714,350,1646,350C1577.1,350,1509,350,1440,350C1371.4,350,1303,350,1234,350
                    C1165.7,350,1097,350,1029,350C960,350,891,350,823,350C754.3,350,686,350,617,350C548.6,350,480,350,411,350
                    C342.9,350,274,350,206,350C137.1,350,69,350,34,350L0,350Z"
                />

            </svg>

            {/* Modal */}
            {specialization.map((iteem) =>{
                return(
                    <div key={iteem.id} className={ModalOpen === iteem.id ? Styles.Modal : Styles.ModalOff}>
                        <div style={{ backgroundColor: iteem.background}}>
                            <i onClick={() => setModalOpen(null)}><IoMdCloseCircle /></i>
                        </div>

                        {console.log(iteem.id)}
                    </div>
                )
            })}


            {/* Section Two */}
            <section className={Styles.SectionTwo}>

                {specialization.map((item)=>{
                    return(
                        <div key={item.id} onClick={() => setModalOpen(item.id)}>
                            <img src={item.icon} alt="Materno"/>
                            <h4>{item.Name}</h4>
                            <p>{item.DescriptionOne}</p>
                        </div>

                    )
                })}
                {/* <div onClick={()=> setModalOpen(!ModalOpen)}>
                    <img src={MaternoIcon} alt="Materno"/>
                    <h4>Materno Infantil</h4>
                    <p>A nutrição materno-infantil é uma área da nutrição que cuida da alimentação de gestantes, lactantes e crianças</p>
                </div>

                <div>
                    <img src={MaternoIcon} alt="Materno"/>
                    <h4>Nutrição Oncológica</h4>
                    <p>A nutrição oncológica é uma especialidade que visa melhorar a saúde de pacientes com câncer</p>
                </div>

                <div>
                    <img src={MaternoIcon} alt="Materno"/>
                    <h4>Nutrição TEA</h4>
                    <p>A nutrição no Transtorno do Espectro Autista (TEA) visa melhorar a qualidade de vida do indivíduo. </p>
                </div> */}

            </section>
{/* 
            <svg
                className={Styles.SvgWaveTwo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{ width: "100%", height: "auto", transform: "rotate(180deg)"}}
                >
                <defs>
                    <linearGradient id="gradient-sw" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor=  "#adc483" />
                    <stop offset="100%" stopColor= "#063326" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#gradient-sw)"
                    d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />
            </svg> */}

        </div>
    );
}

export default Homepage;