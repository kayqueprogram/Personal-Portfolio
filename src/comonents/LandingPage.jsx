/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiRenpy } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoDiscord } from "react-icons/io5";

import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/s1.png.svg";
import s2 from "../assets/s2.png.svg";
import s3 from "../assets/s3.png.svg";
import s4 from "../assets/s4.png.svg";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";

var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>Sirius.sh</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">sobre</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#services">serviços</a>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>HELLO</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter
                words={["I am Kayque"]}
                lmoop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "I'm Full-Stack Developer",

                  "Freelancer",
                  "&",
                  "Web Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          {/* <div className="about1">
            <h5>Full Stack Developer</h5>
          </div> */}
          <div className="btn">
            <button>hire me</button>
            <div className="hire">
              <button>get cv</button>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                <br />
                Introdução - sobre <br />
                mim
              </h2>
              <p>
                Olá! Meu nome é Kayque e tenho 17 anos. Estudo programação e desenvolvimento web desde 2021 e sou um verdadeiro apaixonado por tecnologia.  <br />

                <br/>
                
                Gosto de mergulhar em diferentes linguagens e frameworks de programação, buscando constantemente novos conhecimentos e habilidades para aprimorar minhas habilidades. Acredito que a tecnologia tem o poder de impactar positivamente a sociedade e transformar a forma como vivemos, trabalhamos e nos conectamos com outras pessoas.
              </p>
            </div>
            <div className="download-btn">
              <button><a className="a-link" href="https://firebasestorage.googleapis.com/v0/b/arquivos-entre-mundos.appspot.com/o/cv-Kay%20-%201697146345.pdf?alt=media&token=a6ba73da-29c2-4cd2-adf6-81fb2ade404a" target="_blank">Download CV</a></button>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineHtml5 style={{ color: "orange", fontSize: "70px" }} />
                <p>HTML 5</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <FaCss3Alt style={{ color: "blue", fontSize: "70px" }} />
                <p>css 3</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandJavascript
                  style={{ color: "yellow", fontSize: "70px" }}
                />
                <p>javascript</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <FaBootstrap style={{ color: "purple", fontSize: "70px" }} />
                <p>bootstrap</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>tailwindcss</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "blue", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <SiTypescript style={{ color: "blue", fontSize: "50px" }} />
                <p>Typescript</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <IoLogoFirebase style={{ color: "yellow", fontSize: "60px" }} />
                <p>Firebase</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiNextdotjs style={{ color: "black", fontSize: "60px" }} />
                <p>NextJs</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiRenpy style={{ color: "black", fontSize: "60px" }} />
                <p>Ren'py</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiStyledcomponents style={{ color: "red", fontSize: "70px" }} />
                <p>Styled-components</p>
              </a>
            </div>

            <div className="image">
              <a href="#">
                <IoLogoDiscord style={{ color: "blue", fontSize: "50px" }}/>
                <p>DiscordJs</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1>2+</h1>
                <h3>
                  Anos
                  <br />
                  de experiência
                  <br />
                  
                </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>contate-me</p>
                  <h2 type="tel">(11) 99604-3444</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>Serviços</h1>
          <p>
            Estes são os serviços que presto
            <br />
            Desde o desenvolvimento do seu site, até a divulgação e mídias sociais
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Desenvolvimento Web</h2>
            <p>
              Desenvolvo seu site <br />
              desde o Front <br />
              até o Back
            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Mídias Sociais</h2>
            <p>
              Crio e gerencio suas redes sociais<br />
              Gerando dados <br />
              e monitorando Tráfego
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>SEO</h2>
            <p>
              Os sites são adaptados <br />
              para o sistema de otimização de busca<br />
              utilizado pelo Google
            </p>
          </div>
        </div>
      </section>
    
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Sirius.sh</h1>
            <h2>Siga-me</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/in/kayque-dev-039494251/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>

              <a href="https://www.instagram.com/kayque.jesus.7796/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/kayqueprogram">
                {" "}
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              <a href="https://twitter.com/sirius_sh_xls">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
