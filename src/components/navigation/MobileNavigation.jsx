import NavLinks from "./NavLinks";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);
  // se pasa para cerrar el menu cada vez que se abra

  const hamburgerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );
  const closeIcon = (
    <FontAwesomeIcon
      icon={faXmark}
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );

  return (
    <nav>
      {open ? closeIcon : hamburgerIcon} 
      {/* Si está abierto, el de closeIcon, sino el de hamburguesa */}
      {open && <NavLinks isMobile={true} closeMobile={closeMobile} />}
      {/* Se le pasa la prop isMobile y closeMobile */}
    </nav>
  );
};

export default MobileNavigation;
