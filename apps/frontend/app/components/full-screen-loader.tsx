import { Loader } from 'lucide-react'

interface FullScreenLoaderProps {
  text?: String
}

export const FullScreenLoader = ({ text }: FullScreenLoaderProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Loader className="size-5 animate-spin" />
      <p>{text}</p>
    </div>
  )
}
