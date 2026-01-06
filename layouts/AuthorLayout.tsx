import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'

/** custom */
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const preCompony: string[] = ['(전) 시스원 풀스택 개발자', '(전) 젬미디어 영상 디자이너']

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-primary-400 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            <span className="text-primary-500">P</span>log
          </h1>
        </div>
        <div className="flex flex-row gap-2.5 overflow-hidden p-1 text-sm font-thin text-nowrap text-gray-400 uppercase">
          <span>Pureum log</span>
          <span>Personal log</span>
          <span>Professional log</span>
          <span>Pureum's Log / Blog</span>
          <span>Personal & Professional</span>
          <span>Pureum log</span>
          <span>Personal log</span>
          <span>Professional log</span>
        </div>
        <div className="items-start space-y-2 pt-4 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <div className="border-primary-500 flex h-48 w-48 items-center justify-center rounded-full border">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={168}
                  height={168}
                  className="h-42 w-42 rounded-full"
                />
              </div>
            )}

            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="mt-2 text-sm">
              {preCompony.map((item, idx) => (
                <div key={`pre_compony_${idx}`} className="text-gray-500 dark:text-gray-400">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
