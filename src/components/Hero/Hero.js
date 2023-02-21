import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section raw nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey i'm Ram Motivaras, <br />I am React.js Devloper
      </SectionTitle>
      <SectionText>
        “The best way to predict the future is to invent it.” “Every technology
        really needs to be shipped with a special manual – not how to use it but
        why, when and for what.”
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1i9GjmTLweCvukMYMarRz54dzjeLW2Gmk/view?usp=drivesdk")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
