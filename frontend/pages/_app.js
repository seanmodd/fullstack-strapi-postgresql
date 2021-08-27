import { DefaultSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';
import SEO from 'next-seo.config';
import { theme } from 'styles/theme';
import '../styles/Navbar.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { Provider } from 'next-auth/client';
import { MyTitle } from '../components/SeanNavbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.sesson}>
        <DefaultSeo {...SEO} />
        {/* <GlobalStyle> */}
        <MyTitle />
        <Navbar />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              scale: 1.2,
              opacity: 0,
            },
            pageAnimate: {
              scale: 1,
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
          <Footer />
        </motion.div>
        {/* </GlobalStyle> */}
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
