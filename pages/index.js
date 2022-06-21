import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

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
        {allPostsData.map((index, value)=> {
          return(
            <li>
              <Link href={`../../posts/${encodeURIComponent(index.id)}`}><a>{index.id}</a></Link>
              <br />
              {index.title}
              <br />
              {index.date}
              <br />
              <Date dateString={index.date} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
