import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "./Content";

type Props = {
  children?: ReactNode;
  title?: string;
};
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "User List", href: "/users" },
  { name: "User API", href: "/api/users" },
];

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header navigation={navigation} />
    <Content children={children} />
    <Footer />
  </div>
);

export default Layout;
