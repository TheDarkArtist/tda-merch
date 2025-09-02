import { AlertTriangle } from 'lucide-react'

interface FullScreenLoaderProps {
  text?: String
}

export const FullScreenError = ({ text }: FullScreenLoaderProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AlertTriangle className="size-5" />
      <p>{text}</p>
    </div>
  )
}
