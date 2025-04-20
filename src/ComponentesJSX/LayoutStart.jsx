import Styles from "../CSS-Modules/Layout.module.css"
import LogoTipo from "../Assets/Logo-tipo.png"
import { useNavigate } from "react-router-dom";
import 'animate.css'
import { useState } from "react";

function Layout(){

    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false)

    function navigatee(){
        setFadeOut(true)

        setTimeout(()=>{
            navigate('/Homepage')
        },1000)
       
    }

    return(
        <div className={Styles.ContainerGeneral}>
                <div className={`${!fadeOut ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft'} ${Styles.SvgOne}`}>
                    <svg id="wave" style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(173, 196, 131, 1)" offset="0%"></stop><stop stop-color="rgba(6, 51, 38, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,112L30,112C60,112,120,112,180,105C240,98,300,84,360,67.7C420,51,480,33,540,39.7C600,47,660,79,720,88.7C780,98,840,84,900,77C960,70,1020,70,1080,79.3C1140,89,1200,107,1260,112C1320,117,1380,107,1440,105C1500,103,1560,107,1620,91C1680,75,1740,37,1800,21C1860,5,1920,9,1980,11.7C2040,14,2100,14,2160,23.3C2220,33,2280,51,2340,56C2400,61,2460,51,2520,49C2580,47,2640,51,2700,60.7C2760,70,2820,84,2880,77C2940,70,3000,42,3060,32.7C3120,23,3180,33,3240,32.7C3300,33,3360,23,3420,32.7C3480,42,3540,70,3600,67.7C3660,65,3720,33,3780,18.7C3840,5,3900,9,3960,16.3C4020,23,4080,33,4140,35C4200,37,4260,33,4290,30.3L4320,28L4320,140L4290,140C4260,140,4200,140,4140,140C4080,140,4020,140,3960,140C3900,140,3840,140,3780,140C3720,140,3660,140,3600,140C3540,140,3480,140,3420,140C3360,140,3300,140,3240,140C3180,140,3120,140,3060,140C3000,140,2940,140,2880,140C2820,140,2760,140,2700,140C2640,140,2580,140,2520,140C2460,140,2400,140,2340,140C2280,140,2220,140,2160,140C2100,140,2040,140,1980,140C1920,140,1860,140,1800,140C1740,140,1680,140,1620,140C1560,140,1500,140,1440,140C1380,140,1320,140,1260,140C1200,140,1140,140,1080,140C1020,140,960,140,900,140C840,140,780,140,720,140C660,140,600,140,540,140C480,140,420,140,360,140C300,140,240,140,180,140C120,140,60,140,30,140L0,140Z"></path></svg>
                </div>


                <div className={`${!fadeOut ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut' } ${Styles.Container_Redirect}`}>
                    <img className={Styles.Logo_Tipo} src={LogoTipo} alt="Logo-tipo" />

                    <h1>Iracema Rocha</h1>
                    <span>Nutricionista</span>

                    <p>
                        Nosso site de nutrição oferece dicas, receitas saudáveis e orientações  
                        baseadas em ciência para melhorar sua alimentação e bem-estar.  

                        Aqui, você encontra conteúdos sobre dietas equilibradas, saúde digestiva  
                        e desempenho esportivo.  

                        Cuide do seu corpo com informações confiáveis e práticas, transformando  
                        sua rotina com hábitos mais saudáveis!
                    </p>

                    <button onClick={navigatee}>Ir para o Site</button>
                </div>

                <footer className={`${!fadeOut ? 'animate__animated animate__fadeInRightBig' : 'animate__animated animate__fadeOutRight'}`}>
                        <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(173, 196, 131, 1)" offset="0%"></stop><stop stop-color="rgba(6, 51, 38, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,112L30,112C60,112,120,112,180,105C240,98,300,84,360,67.7C420,51,480,33,540,39.7C600,47,660,79,720,88.7C780,98,840,84,900,77C960,70,1020,70,1080,79.3C1140,89,1200,107,1260,112C1320,117,1380,107,1440,105C1500,103,1560,107,1620,91C1680,75,1740,37,1800,21C1860,5,1920,9,1980,11.7C2040,14,2100,14,2160,23.3C2220,33,2280,51,2340,56C2400,61,2460,51,2520,49C2580,47,2640,51,2700,60.7C2760,70,2820,84,2880,77C2940,70,3000,42,3060,32.7C3120,23,3180,33,3240,32.7C3300,33,3360,23,3420,32.7C3480,42,3540,70,3600,67.7C3660,65,3720,33,3780,18.7C3840,5,3900,9,3960,16.3C4020,23,4080,33,4140,35C4200,37,4260,33,4290,30.3L4320,28L4320,140L4290,140C4260,140,4200,140,4140,140C4080,140,4020,140,3960,140C3900,140,3840,140,3780,140C3720,140,3660,140,3600,140C3540,140,3480,140,3420,140C3360,140,3300,140,3240,140C3180,140,3120,140,3060,140C3000,140,2940,140,2880,140C2820,140,2760,140,2700,140C2640,140,2580,140,2520,140C2460,140,2400,140,2340,140C2280,140,2220,140,2160,140C2100,140,2040,140,1980,140C1920,140,1860,140,1800,140C1740,140,1680,140,1620,140C1560,140,1500,140,1440,140C1380,140,1320,140,1260,140C1200,140,1140,140,1080,140C1020,140,960,140,900,140C840,140,780,140,720,140C660,140,600,140,540,140C480,140,420,140,360,140C300,140,240,140,180,140C120,140,60,140,30,140L0,140Z"></path></svg>
                </footer>
        </div>
    )
}

export default Layout