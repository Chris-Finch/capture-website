// import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/workout1.jpg";
// Styles
import { StyledAbout, StyledImage, StyledDescription } from "../styles";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./UseScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>
              We work with your schedule to get the most out of your training.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Team Work</h3>
            </div>
            <p>
              Our coaches work with you from beginning to end to get the results
              you need.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Tracking</h3>
            </div>
            <p>
              Whether you want to improve power, speed, or endurance, we track
              your progress over time to ensure you meet your goals.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>We can customize any program to meet your financial needs.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

// Add to an existing styled component
const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
