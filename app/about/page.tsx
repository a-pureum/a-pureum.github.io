import { genPageMetadata } from 'app/seo'

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

/** lib */
import { FileClockIcon, UserRoundIcon } from 'lucide-react'

/** custom */
import QuoteIcon from '/public/static/svg/quote.svg'

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
        <section className="flex flex-col gap-2">
          <article>
            <h5 className="mt-0 mb-0 flex flex-row items-center -space-x-3 text-2xl font-extrabold">
              <QuoteIcon className="text-primary-100 h-14 w-14 dark:text-gray-900" />
              <span className="text-primary-500 z-10 text-center">
                생각의 끈을 놓지 않는 집요함으로 코드의 맥락을 읽습니다.
              </span>
              <QuoteIcon className="text-primary-100 h-14 w-14 rotate-180 dark:text-gray-900" />
            </h5>
          </article>
          <article>
            <h4 className="flex flex-row items-center text-gray-700 dark:text-gray-300">
              <UserRoundIcon className="mr-1 h-4 w-4" />
              Me
            </h4>
            <ul className="border-primary-200 bg-primary-100 rounded-3xl border p-3 dark:border-gray-800 dark:bg-gray-900/70">
              {aboutMe.map((item, idx) => (
                <li key={idx} className="ml-6 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h4 className="flex flex-row items-center text-gray-700 dark:text-gray-300">
              <FileClockIcon className="mr-1 h-4 w-4" /> Blog
            </h4>
            <MDXLayoutRenderer code={author.body.code} />
          </article>
        </section>
      </AuthorLayout>
    </>
  )
}
