import { Button } from '@/components/ui/button'
import { IconSearch } from '@tabler/icons-react'
import { useKBar } from 'kbar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function SearchButton() {
  const { query } = useKBar()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            id="search"
            aria-label="Search"
            variant={'ghost'}
            size={'icon'}
            onClick={() => {
              query.toggle()
            }}
          >
            <IconSearch />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Search</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
