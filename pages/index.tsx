
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'


const Home: NextPage = ({ repositors }) => {
  return (
    <ul>
      {
        repositors.map((repo) => <li key={repo}>{repo}</li>)
      }
    </ul>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/natamartins/repos')

  const data = await response.json();
  const repositorioName = data.map((item: { name: any }) => item.name)

  return {
    props: {
      repositors: repositorioName
    }
  }
}

export default Home
