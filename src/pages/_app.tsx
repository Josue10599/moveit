import '../styles/global.css'

import { ChallengeContext, ChallengeProvider } from '../context/ChallengedContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  );
}

export default MyApp
