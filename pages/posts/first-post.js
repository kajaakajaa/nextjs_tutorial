import Head from 'next/head';
import Link from 'next/link';
import header from '/components/first-post.module.css';
import {Header, Button} from '/components/index';

export default function FirstPost() {
  return(
    <>
      <Head>
        <title>Create Next Kajaa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h2>
        <Button />
        <Link href="/">
          <a className={header.h1}>Back To Home</a>
        </Link>
      </h2>
    </>
  )
}