import type { NextPage } from 'next'
import Image from 'next/image'

import {
  Container,
  Main,
  Title,
  Description,
  Code,
  Grid,
  Card,
  Footer,
  Logo
} from 'layouts/index.styles'

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title color="primary">
          Welcome to <a href="#">Portfolio</a>
        </Title>

        <Description>
          Get started by editing{' '}
          <Code>pages/index.js</Code>
        </Description>

        <Grid>
          <Card>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Grid>
      </Main>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Logo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Logo>
        </a>
      </Footer>
    </Container>
  )
}

export default Home
