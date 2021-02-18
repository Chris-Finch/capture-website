import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    // layout prop just lets framer motion know this component is changing
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
