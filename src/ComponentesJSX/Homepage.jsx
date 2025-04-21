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
                viewBox="0 0 1440 320"
                style={{ width: "100%", height: "auto" }}
                
            >

                <defs>
                    <linearGradient id="gradient" x1="100%" y1="0%" x2="0" y2="0%">
                        <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                </defs>

                <path
                    fill="url(#gradient)"
                    d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,133.3C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                />
            </svg>      

            {/* Modal */}
            {specialization.map((iteem) =>{
                return(
                    <div key={iteem.id} className={ModalOpen === iteem.id ? Styles.Modal : Styles.ModalOff}>
                        <div style={{backgroundColor: iteem.background}}>
                            <i onClick={() => setModalOpen(null)}><IoMdCloseCircle /></i>
                        </div>
                    </div>
                )
            })}


            {/* Section Two */}
            <section className={Styles.SectionTwo}>
                <h3>Conheça um pouco mais sobre as especializações nutricionais</h3>
                {specialization.map((item)=>{
                    return(
                        <div key={item.id} onClick={() => setModalOpen(item.id)}>
                            <img src={item.icon} alt="Materno"/>
                            <h4>{item.Name}</h4>
                            <p>{item.DescriptionOne}</p>
                        </div>

                    )
                })}
                
            </section>


            {/* SectionTree */}
                <div className={Styles.Space}></div>
                <section className={Styles.SactionTree}> 
                    <div>
                        <h1>Agende a sua consulta</h1>
                        <span>Sua saúde merece prioridade: agende agora sua consulta nutricional e comece a transformar sua alimentação com orientação profissional e acolhimento individualizado!</span>
                    </div>
                    
                    <div>
                        <button>Aendar a sua Consulta</button>
                    </div>

                </section>

        </div>
    );
}

export default Homepage;