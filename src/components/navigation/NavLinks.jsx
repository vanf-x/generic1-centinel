import { Link, useLocation } from "react-router-dom";

const NavLinks = (props) => {
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <ul>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/inicio"
          className={`${
            (urlActual === "/inicio" || urlActual === "/") && "selected"
          }`}
        >
          Inicio
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/nosotros"
          className={`${urlActual === "/nosotros" && "selected"}`}
        >
          Nosotros
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/servicios"
          className={`${urlActual === "/servicios" && "selected"}`}
        >
          Servicios
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            props.isMobile && props.closeMobile();
          }}
          to="/contacto"
          className={`${urlActual === "/contacto" && "selected"}`}
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
