import { ApolloProvider } from '@apollo/client';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import { UserStateProvider } from '../lib/useUser';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <UserStateProvider>
        <Page>
          <Component {...pageProps} />
          <Script
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-X3C3702R7G"
          />
          <Script strategy="lazyOnload">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X3C3702R7G', {
        page_path: window.location.pathname,
      });
  `}
          </Script>
        </Page>
      </UserStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};

export default withData(MyApp);
