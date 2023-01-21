import React from 'react';
import Heading from '../../components/shared/heading';
import contact from './contact.svg';

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <section className="app-container">
      <Heading style="dark:text-txt text-lgrey">Get in touch</Heading>
      <div className="font-poppins text-txt-secondary pb-6 mb-6">
        <p className="text-xl w-1/2">
          I am currently looking for an opportunity, so if you are looking for a
          frontend React developer, i would be really interested.
        </p>
        <p className="text-xl mb-12">
          So feel free to reach out to me via the button below.
        </p>
        <a
          className="bg-lsecondary text-base text-primary font-bold px-8 py-2 dark:bg-lsecondary hover:shadow-card transition"
          href="mailto:abdat.med.younes@gmail.com"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-end">
        <img src={contact} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
