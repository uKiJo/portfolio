import React from 'react';
import Heading from '../../components/shared/heading';
import contact from './contact.svg';

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <section className="app-container sm:w-4/5 mx-auto">
      <Heading style="dark:text-txt text-lgrey sm:text-start xs:text-center">
        Get in touch
      </Heading>
      <div className="font-poppins text-txt-secondary pb-6 mb-10 sm:p-0 xs:px-12">
        <div className="text-xl md:w-1/2 mb-6 md:text-xl xs:text-base">
          <p>
            I am currently looking for an opportunity, so if you are looking for
            a frontend React developer, i would be really interested.
          </p>
          <p>So feel free to reach out to me via the button below.</p>
        </div>
        <a
          className="bg-lsecondary text-base text-primary font-bold px-8 py-2 dark:bg-lsecondary hover:shadow-card transition inline-block"
          href="mailto:abdat.med.younes@gmail.com"
        >
          Contact
        </a>
      </div>
      <div className="flex md:justify-end xs:justify-center">
        <img className="lg:w-fit sm:w-80 xs:w-72" src={contact} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
