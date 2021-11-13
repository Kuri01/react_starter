import React from 'react';
import Container from '../../Container/Container';
import Hero from '../Hero/Hero';
import { faqData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero image={faqData.image} />
    <h2>{faqData.title}</h2>
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;
