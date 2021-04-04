export const getStaticProps = async ({ params }) => {
  const date = new Date()
  const text = (await fetch('https://web.jjsweb.site/should-hide.txt')
    .then(res => res.text())).trim()

  console.log(text)

  if (text === 'yes') {
    return {
      notFound: true,
      revalidate: 1
    }
  }

  return {
    props: {
      params,
      hello: 'world',
      random: Math.random(),
      seconds: date.getSeconds(),
    },
    revalidate: 1
  }
}

export const getStaticPaths = () => {
  return {
    paths: [
      '/post/post-1'
    ],
    fallback: 'blocking'
  }
}

export default function Post(props) {
  return <p id='props'>{JSON.stringify(props)}</p>
}