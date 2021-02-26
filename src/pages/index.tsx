import Head from 'next/head';

import { CompletedChallenge } from '../components/CompletedChallenge';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengedBox } from '../components/ChallengedBox';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início - Move It</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <CountDown />
        </div>
        <div>
          <ChallengedBox />
        </div>
      </section>
    </div>
  );
}
