import home1 from "../img/gym1.jpg";
// Styled
import {
  StyledAbout,
  StyledImage,
  StyledDescription,
  StyledHide,
} from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  // Framer Motion Animations

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>fitness</span> goals
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>reality.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          We work to get you ready for your next race, adventure, expedition, or
          just daily life through our specialized fitness and nutrition
          programs.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="dude with camera"
        ></motion.img>
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

// Styled Components

export default AboutSection;
