import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'TDA Merch' },
    { name: 'description', content: 'Welcome to TDA Merch' },
  ]
}

export default function HomePage() {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center h-80 bg-gradient-to-br from-rose-900 via-cyan-900 to-blue-900 w-full">
        <h1 className="text-6xl font-semibold text-green-600">TDAMerch</h1>
      </div>
    </div>
  )
}
