import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

/** lib */
import { QuoteIcon } from 'lucide-react'

/** custom */
import AuthorLayout from '@/layouts/AuthorLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const aboutMe: string[] = [
    '정적인 활동을 좋아해요.📘🧶',
    '혼자 집중해서 정리하는 시간을 중요하게 생각해요.',
    '존중받는 환경에서 가장 안정적으로 일할 수 있어요.',
    '가독성과 심미성을 중요시 하는 편! 계속 보고 싶은 화면을 만들고 싶어요.',
  ]

  return (
    <>
      <AuthorLayout content={mainContent}>
        <section>
          <article>
            <h5 className="flex flex-row gap-1.5 text-2xl font-extrabold">
              <QuoteIcon className="rotate-180 fill-gray-600 stroke-gray-600" />
              <span>생각의 끈을 놓지 않는 집요함으로 코드의 맥락을 읽습니다.</span>
              <QuoteIcon className="fill-gray-600 stroke-gray-600" />
            </h5>
            <p className="mt-1 mb-0">
              {
                '문제의 근본 원인을 파악할 때까지 끝까지 파고드는 성실함을 가진 사람, 주도적으로 생각하는 개발자가 되고 싶습니다.'
              }
            </p>
          </article>
          <article>
            <ul>
              {aboutMe.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
          {/*<MDXLayoutRenderer code={author.body.code} />*/}
        </section>
      </AuthorLayout>
    </>
  )
}
