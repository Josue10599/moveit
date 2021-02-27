import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenge } from '../components/CompletedChallenge';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengedBox } from '../components/ChallengedBox';
import { ChallengeProvider } from '../context/ChallengedContext'
import { CountDownProvider } from '../context/CountDownContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      challengesCompleted={props.challengesCompleted}
      currentExperience={props.currentExperience}
    >
      <div className={styles.container}>
        <Head>
          <title>Início - Move It</title>
        </Head>
        <ExperienceBar />
        <section>
          <CountDownProvider>
            <div>
              <Profile />
              <CompletedChallenge />
              <CountDown />
            </div>
            <div>
              <ChallengedBox />
            </div>
          </CountDownProvider>
        </section>
      </div>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
}