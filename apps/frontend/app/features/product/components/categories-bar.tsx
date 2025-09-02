import { useCategories } from '../hooks/use-categories'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'

export function CategoryBar() {
  const { data: categories, isLoading } = useCategories()
  const [selected, setSelected] = useState<string | null>(null)

  if (isLoading) {
    return (
      <div className="flex gap-2 p-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-sm" />
        ))}
      </div>
    )
  }

  return (
    <ToggleGroup
      type="single"
      value={selected}
      onValueChange={setSelected}
      className="flex overflow-x-auto gap-2 px-4 py-2 bg-zinc-900 border-y border-zinc-800"
    >
      {categories?.map((cat) => (
        <ToggleGroupItem
          key={cat.id}
          value={cat.slug}
          className="text-sm rounded-sm bg-zinc-800 data-[state=on]:bg-primary data-[state=on]:text-white"
        >
          {cat.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
