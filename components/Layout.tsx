import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "./Content";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { configResponsive } from "ahooks";
configResponsive({
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
});
type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "User List", href: "/users" },
  { name: "User API", href: "/api/users" },
];

const Layout = ({
  children,
  title = "Nextjs",
  description = "Nextjs with Tailwind and SEO",
}: Props) => {
  const router = useRouter();
  const url = router.asPath;
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical="/"
        facebook={{
          appId: process.env.FACEBOOK_CLIENT_ID,
        }}
        openGraph={{
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${"/logo.png"}`,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
        }}
      />
      <Header navigation={navigation} />
      <Content children={children} />
      <Footer />
    </div>
  );
};

export default Layout;
