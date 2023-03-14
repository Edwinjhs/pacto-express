import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Amigos</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Grupos</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Ver</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Recuerdos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Tus atajos</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Juegos</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Galeria</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Mensajes</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Otros</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Recaudación de fondos</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutoriales</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
