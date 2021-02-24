import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions<span>FAQ</span>
      </h2>
      {/* AnimateSharedLayout from framermotion lets detects if the layout changes, which it does when we toggle each question. Wrap around entire component/components */}
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Get in contact with one of our experienced coaches.</p>
            <p>We can work together on a plan that is right for you.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Train from anywhere in the world.</p>
            <p>
              Our coaches will help you build a plan that fits your busy life,
              whether you have access to a gym or not.
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>
              We will work with you on a payment plan that meets your needs.
            </p>
            <p>
              Short-term or long-term, we have a flexible payment plan for
              everybody.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Services do you Offer?">
          <div className="answer">
            <p>We offer full fitness programs for any goals.</p>
            <p>
              Whether you are paleo, keto, gluten-free, or vegan, we offer
              nutrition programs best suited to your individual goals and
              dietary restrictions.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
