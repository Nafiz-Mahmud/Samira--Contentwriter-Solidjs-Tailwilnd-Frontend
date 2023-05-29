import headerImg from "../assets/header.jpg";
export default function About() {
  return (
    <div class="about">
      <div className="about_items">
        <div className="about_img">
          <img src={headerImg} alt="" />
        </div>
        <div className="about_info">
          <span class="about_title">About Me</span>
          <span class="about_text">
            I help clients transform their business with the right words and
            relevant digital content.
          </span>
        </div>
      </div>
    </div>
  );
}
