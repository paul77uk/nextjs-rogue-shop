import logo from "@/public/images/rogue-footer-logo.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-black footer-center gap-5 py-7">
      <Image src={logo} alt="Rogue Fitness" width={160}/>
      <h5 className="text-gray-400 text-xs">
        &copy; 2010-{currentYear} Rogue Fitness. All Rights Reserved.
      </h5>
    </footer>
  );
};

export default Footer;
