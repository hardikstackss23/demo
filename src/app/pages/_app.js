import { NightModeProvider } from '../Components/NightModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <NightModeProvider>
      <Component {...pageProps} />
    </NightModeProvider>
  );
}

export default MyApp;


