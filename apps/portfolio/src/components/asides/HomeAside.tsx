import { Box, Heading, Flex, Text, VStack, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import BasicCard from '../BasicCard';
import Gauge from '../Gauge';

const SkillGauge: FC<{ value: number; title: string }> = ({ value, title }) => (
  <VStack>
    <Gauge value={value} h="3rem" w="3rem" />
    <Text textAlign="center">{title}</Text>
  </VStack>
);

const HomeAside: FC = () => (
  <Box>
    <BasicCard>
      <Heading size="sm" mb="0.5rem">
        Hard Skills
      </Heading>
      <Grid templateColumns="1fr 1fr" gap="0.75rem" my="1rem">
        <SkillGauge value={100} title="React" />
        <SkillGauge value={100} title="Node" />
        <SkillGauge value={100} title="JavaScript" />
        <SkillGauge value={100} title="TypeScript" />
        <SkillGauge value={80} title="GraphQL" />
        <SkillGauge value={60} title="AWS" />
        <SkillGauge value={50} title="Azure" />
        <SkillGauge value={50} title="C#" />
      </Grid>
    </BasicCard>
    <BasicCard my="1rem">
      <Heading size="sm" my="0.5rem">
        Soft Skills
      </Heading>
      <Grid templateColumns="1fr 1fr" gap="0.75rem" my="1rem">
        <SkillGauge value={100} title="Problem Solving" />
        <SkillGauge value={90} title="Teamwork" />
        <SkillGauge value={80} title="Leadership" />
        <SkillGauge value={70} title="Agile" />
      </Grid>
    </BasicCard>
  </Box>
);

export default HomeAside;
