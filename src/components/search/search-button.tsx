import { Button } from '@/components/ui/button'
import { IconSearch } from '@tabler/icons-react'
import { useKBar } from 'kbar'

export default function SearchButton() {
  const { query } = useKBar()

  return (
    <Button aria-label="Search" variant={'ghost'} size={'icon'} onClick={() => query.toggle()}>
      <IconSearch />
    </Button>
  )
}
