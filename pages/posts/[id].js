import Head from 'next/head'
import {Layout, Date} from '../../components/index'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  console.log(postData)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.nu}
      <br />
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

//このページのリロード時にビルドされるパス。取得するファイルのパスからファイル名を"id"として取得する関数 → idのパスの取得
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
//このページのリロード時に読み込まれるプロパティ(本番時はビルド時)。解析したファイルを読み込んでいる(ハッシュ形式のデータのみを抽出している) → idの内容の取得
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return{
    props: {
      postData
    }
  }
}