import logo from "../assets/logo.png";
import headerImg from "../assets/header.jpg";
export default function Header() {
  return (
    <div class="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header_items">
        <div className="header_info">
          <span class="header_title">Samira Hadid</span>
          <span class="header_cat">Copywriter</span>
          <button>See my work</button>
        </div>
        <div className="header_img">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
