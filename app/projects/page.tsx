import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-primary-300 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            <span className="text-primary-500">P</span>rojects
          </h1>
        </div>
        <div className="flex flex-row gap-2 overflow-hidden p-1 text-xs font-light text-nowrap text-gray-300 uppercase dark:text-gray-700">
          <span>Pureum log</span>
          <span>Personal log</span>
          <span>Professional log</span>
          <span>Pureum's Log / Blog</span>
          <span>Personal & Professional</span>
          <span>Pureum log</span>
          <span>Personal log</span>
          <span>Professional log</span>
          <span>Pureum's Log / Blog</span>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
