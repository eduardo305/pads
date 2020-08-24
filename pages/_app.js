import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import theme from "../themes/theme";

import { AppProvider } from "../providers/AppProvider";

import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AppProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container maxWidth="xl">
            {/* <Header /> */}

            <Component {...pageProps} />
            <style jsx global>{`
              html,
              body,
              #__next,
              .MuiContainer-root {
                height: 100%;
              }

              ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
              }

              div {
                box-sizing: border-box;
              }

              .MuiContainer-root {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
            `}</style>
          </Container>
        </ThemeProvider>
      </AppProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
