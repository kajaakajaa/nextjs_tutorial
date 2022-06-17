import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <section>
      <h2>Blog</h2>
      <Link href="/posts/first-post"><a>fitst-postへ</a></Link>
      <ul>
        {allPostsData.map(({ id, date, title, age }) => (
          <li>
            {title}
            <br />
            {id}
            <br />
            {date}
            <br />
            {age}
          </li>
        ))}
      </ul>
    </section>
  )
}
