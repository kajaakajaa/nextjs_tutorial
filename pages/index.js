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
      <p>{allPostsData[0].id}</p>
      <ul>
        {allPostsData.forEach((index, value)=> {
          <li>
            {console.log(index)}
          </li>
        })}
      </ul>
    </section>
  )
}
