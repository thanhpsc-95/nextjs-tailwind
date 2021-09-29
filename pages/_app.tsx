import React from "react";
import "../styles/scss/tailwind.scss";
const NextApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default NextApp;
