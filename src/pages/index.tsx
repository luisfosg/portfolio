import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'

import { Container, Main, Title, Link } from 'layouts/index.styles'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Main>
        <Title color="primary">
          { t('greeting') } <Link color="terciary">{ t('portfolio') }</Link>
        </Title>
        <h2>{ t('construction') }</h2>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
        <p className="prototype">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus asperiores cum dicta, distinctio consectetur eos iste, nihil quo, aspernatur provident facere. Aliquam, doloribus repellendus voluptatum, ipsam reprehenderit alias tempore quod perferendis ipsum eaque corporis quo incidunt suscipit illo, cum pariatur architecto beatae vero. Ipsam non laudantium dolores architecto labore sunt illo animi temporibus, aliquam rerum ducimus tempore minima incidunt et numquam ullam! Error voluptatibus ullam labore. Nulla quidem ex praesentium tempore blanditiis, maiores architecto autem laboriosam provident dignissimos ducimus non placeat, libero molestias porro eligendi corrupti, tenetur quo dicta quasi incidunt quia dolorum doloremque! Harum reiciendis at ratione porro.
        </p>
      </Main>
    </Container>
  )
}

export default Home
