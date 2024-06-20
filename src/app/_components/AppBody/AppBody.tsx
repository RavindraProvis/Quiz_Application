import * as React from 'react';
import BodyCard from '../BodyCard/BodyCard';
import { Grid } from '@mui/material';


export default function AppBody() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <BodyCard
          heading='Defense Forces'
          subHeading='Comprehensive aptitude and psychometric analysis for military and police use'
          paragraph="There is a wide variety of positions and job profiles in defense forces each demanding a certain set of skills. Our aptitude tests empower recuriters to make informed decisions with regard to matching requisites to abilities and personalities."
          btnText='Learn More'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BodyCard
          heading='Job Applications'
          subHeading='Predict real-world job performance using our scientifically validated tests'
          paragraph="Our screening tests identify the best candidates and make your hiring decisions faster, easier, and bias-free. Our unique personality and value tests allow you to get to know your applicants as real people – not just pieces of paper."
          btnText='Learn More'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BodyCard
          heading='Personal Testing'
          subHeading='Discover your IQ as well as your cognitive strengths and weaknesses with our online test'
          paragraph="Our vast collections of data and intelligent sampling ensures our online IQ test is the most accurate available. We take special care to avoid sampling and cultural biases. We offer a certified IQ score and a multiple intelligences report."
          btnText='Take Over Personal Test'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BodyCard
          heading='Education'
          subHeading='Equal opportunity testing with an emphasis on growth learning'
          paragraph="We offer a wide range of aptitude tests to identify a student' s strengths and weaknesses. We ensure each one of your students is performing to their true potential and identify any supports they may require."
          btnText='Learn More'
        />
      </Grid>
    </Grid>
  )
}
