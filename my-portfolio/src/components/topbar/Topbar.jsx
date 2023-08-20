import "./topbar.scss";

function Topbar({menuOpen,setMenuOpen}) {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Ulusoy</a>
            <div className="itemContainer">
              <i className="fa-solid fa-user"></i>
              <span>+90 507 530 48 50</span>
            </div>
            <div className="itemContainer">
              <i className="fa-solid fa-envelope"></i>
              <span>ulusoyeminn@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Topbar;