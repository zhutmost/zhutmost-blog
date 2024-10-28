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
        <Twemojify size={'default'}>Happy reading!&nbsp;🍻</Twemojify>
      </p>
    </div>
  )
}
