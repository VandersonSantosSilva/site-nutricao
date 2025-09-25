import Styles from "../CSS-Modules/Homepage.module.css";
import LogoTipo from "../Assets/Logo-tipo.png";
import imgHeader01 from "../Assets/1.png";
import imgHeader02 from "../Assets/2.png";
import imgHeader03 from "../Assets/3.png";
import MaternoIcon from '../Assets/MaternoIcon.svg'
import Animete from "../Assets/Animete.png"
import Agendamento from "../Assets/Agendamento.png"
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
            Name: "Saúde da Mulher",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "orange",
        },

                {
            id: 3,
            icon: MaternoIcon,
            Name: "Oncologia",
            DescriptionOne: "Descrição de Texte",
            DescriptionTwo: "Descrição de Texte",
            background: "green",
        },

        {
            id: 4,
            icon: MaternoIcon,
            Name: "Nutrição Cliníca",
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


            <section className={Styles.SectionOne}>
                    <img src={Animete} alt="Iracema" />

                    <div>
                        <div>
                            <h1>Iracema Rocha</h1>
                            <span>Nutricionista - CRN: 48156 </span>
                        </div>

                        <p>

                           Iracema Rocha é nutricionista formada pela Universidade Federal de Alagoas (UFAL), 
                           com experiência em nutrição clínica e educação nutricional. Com foco no bem-estar de seus pacientes,
                           ela utiliza abordagens personalizadas e práticas baseadas em evidências científicas
                           para promover uma alimentação equilibrada e saudável.

                        </p>
                    </div>

            </section>

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
            <h3>Especializações Nutricionais</h3>
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
                
            </section>





            {/* SectionTree */}
               
            <section className={Styles.SactionTree}> 
 
                <div  className={Styles.Agendamento}>
                    <img src={Agendamento} alt="Agendamento-Iracema" />

                        <div>
                            <h1>Faça seu agendamento</h1>
                            <p>
                                Sua saúde começa com pequenas escolhas — e a mais importante delas é buscar orientação!
                                Se você quer emagrecer com saúde, ganhar mais energia no dia a dia, melhorar sua digestão ou simplesmente entender melhor o que seu corpo precisa, a nutrição personalizada pode transformar sua vida.
                                Agende sua consulta e descubra como uma alimentação equilibrada pode fazer a diferença no seu bem-estar físico e emocional.
                            </p>
                            <button>Agendar Consulta</button>
                        </div>
                </div>

            </section>

        </div>
    );
}

export default Homepage;