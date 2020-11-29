import { Box, Container, Grid } from '@chakra-ui/react';
import ResumeAside from 'src/components/asides/ResumeAside';
import ResumeFooter from 'src/components/footers/ResumeFooter';
import ResumeHeader from 'src/components/headers/ResumeHeader';
import ResumeMain from 'src/components/mains/ResumeMain';
import ResumeLayout from 'src/layouts/ResumeLayout';

const Resume = () => {
  return (
    <ResumeLayout>
      <Container maxW="lg" p="1rem">
        <Grid
          templateAreas={`
            "header main"
            "aside main"
            "aside footer"
          `}
          gridTemplateColumns="15rem auto"
          gap="1rem"
          gridAutoRows="min-content"
          h="100%"
        >
          <Box as="header" gridArea="header">
            <ResumeHeader />
          </Box>
          <Box as="aside" gridArea="aside">
            <ResumeAside />
          </Box>
          <Box as="main" gridArea="main">
            <ResumeMain />
          </Box>
          <Box as="footer" gridArea="footer">
            <ResumeFooter />
          </Box>
        </Grid>
      </Container>
    </ResumeLayout>
  );
};

export default Resume;
