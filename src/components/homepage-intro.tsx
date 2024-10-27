import TypedBios from '@/components/typed-bios'
import Twemojify from '@/components/twemoji'

export default function HomepageIntro() {
  return (
    <div className="text-lg text-muted-foreground">
      <p className="">
        I am a dedicated <span className="font-medium">software developer</span> and a tech
        enthusiast.
      </p>
      <TypedBios />
      <p className="flex items-center">
        <Twemojify size={'default'}>{'Happy reading!🍻🍻'}</Twemojify>
      </p>
    </div>
    // <div className="flex flex-row justify-start gap-5">
    //   <NextImage
    //     src={'/images/homepage-avatar.jpg'}
    //     alt={'Avatar'}
    //     width={400}
    //     height={280}
    //     className="rounded-lg"
    //   />
    //   <div className="space-y-2 text-xl text-muted-foreground">
    //     <p className="font-medium">A software developer and a tech enthusiast.</p>
    //     <TypedBio />
    //     <div className="mb-4 mt-4 text-base">
    //       <p>- I started learning to code in 2019 when I started college.</p>
    //       <p>- I landed my first job as a Back-end Developer in 2021.</p>
    //       <p>- I have a passion for JavaScript/Typescript and website development.</p>
    //       <p>- I started this blog to practice my skill and share my knowledge.</p>
    //     </div>
    //   </div>
    // </div>
  )
}
