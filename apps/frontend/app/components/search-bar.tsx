import { Button } from './ui/button'
import { Input } from './ui/input'

export const SearchBar = () => {
  return (
    <div className="flex items-center max-w-2xl w-full">
      <Input
        className="focus-visible:ring-0 focus-visible:border-zinc-600 rounded-r-none border-zinc-700 text-zinc-300 dark:bg-zinc-800"
        placeholder="Search"
      />
      <Button className="rounded-l-none bg-zinc-700">Search</Button>
    </div>
  )
}
