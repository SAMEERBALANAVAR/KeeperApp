import react from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright @ <b>{currentYear}</b>
      </p>
    </footer>
  );
}

export default Footer;
