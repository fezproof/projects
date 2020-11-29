import { Grid } from '@chakra-ui/react';
import Head from 'next/head';
import { Children, FC } from 'react';
import GenericNav from 'src/components/navs/GenericNav';

const ResumeLayout: FC = ({ children }) => (
  <div>
    <Head>
      <title>Ben Chidlow - Resume</title>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="description"
        content="Ben Chidlow's personal resume. Should be ready to print straight away!"
      />
    </Head>

    <Grid
      gridTemplateColumns={{ base: 'auto', lg: '6rem auto' }}
      gridTemplateRows={{ base: '0 auto 5rem', lg: 'auto' }}
    >
      <GenericNav />
      {Children.only(children)}
    </Grid>
  </div>
);

export default ResumeLayout;
