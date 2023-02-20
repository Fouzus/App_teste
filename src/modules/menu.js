import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "@material-ui/core/Drawer/index";
import IconButton from "@material-ui/core/IconButton/index";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import TestIcon from "@material-ui/icons/Assessment";
import "./../styles.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div style={{ position: "absolute", top: 0 }}>
        <IconButton onClick={() => setOpen(true)} aria-label="Abrir Menu">
          <MenuIcon style={{ fontSize: "30px" }} />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div>
            <IconButton onClick={() => setOpen(false)} aria-label="Fechar Menu">
              <CloseIcon style={{ fontSize: "30px" }} />
            </IconButton>
            <div>
              <Link to="/home">
                <IconButton aria-label="Ir para a Página Inicial">
                  <HomeIcon style={{ fontSize: "30px", marginTop: "10px" }} />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to="/teste">
                <IconButton aria-label="Ir para a Página Inicial">
                  <TestIcon style={{ fontSize: "30px", marginTop: "10px" }} />
                </IconButton>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
