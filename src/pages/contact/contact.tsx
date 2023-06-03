import React from "react";
import { useSpring, animated } from "react-spring";
import Heading from "../../components/shared/heading";
import contact from "./contact.svg";
import Description from "../../components/shared/description";
import Button from "../../components/shared/Button";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  const contactProp = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 700,
  });
  return (
    <section className="app-container sm:w-4/5 mx-auto">
      <Heading style="dark:text-txt text-lgrey sm:text-start xs:text-center">
        Get in touch
      </Heading>
      <animated.div style={contactProp}>
        <div className="font-poppins text-txt-secondary pb-6 mb-10 sm:p-0 xs:px-12">
          <div className="text-xl md:w-1/2 mb-6 md:text-xl xs:text-base">
            <Description>
              I am currently looking for an opportunity, so if you are looking
              for a frontend React developer, i would be really interested. So
              feel free to reach out to me via the button below
            </Description>
          </div>
          <div className="sm:justify-start xs:flex xs:justify-center">
            <a
              className="bg-lsecondary text-base text-primary font-bold px-8 py-2 dark:bg-lsecondary hover:shadow-card hover:-translate-y-0.5 transition inline-block rounded"
              href="mailto:abdat.med.younes@gmail.com"
            >
              Contact
            </a>
            {/* <Button to="mailto:abdat.med.younes@gmail.com">Hoop!</Button> */}
          </div>
        </div>
        <div className="flex md:justify-end xs:justify-center">
          <img
            className="lg:w-fit sm:w-80 xs:w-72"
            src={contact}
            alt="contact"
          />
        </div>
      </animated.div>
    </section>
  );
};

export default Contact;
