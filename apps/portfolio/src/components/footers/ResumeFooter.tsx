import { Heading, Text } from '@chakra-ui/react';
import BasicCard from '../BasicCard';

const ResumeFooter = () => (
  <BasicCard>
    <Heading as="h3" size="sm">
      About me
    </Heading>
    <Text>
      I will always encourage developer experience, as long as it serves a
      better user experience. This can be as simple as automaic code splitting
      for faster speed, to strong devops patterns to ensure the user always sees
      the best the team has to offer.
    </Text>
    <Text>
      Inclusive development and design are also very important to me. The things
      we make should be usable by as many people as we can.
    </Text>
  </BasicCard>
);

export default ResumeFooter;
