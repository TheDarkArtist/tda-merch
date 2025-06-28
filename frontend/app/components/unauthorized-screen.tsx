import { UserLock } from "lucide-react"

export const UnauthorizedScreen = () => {
  return (
    <div className="h-full flex gap-y-6 flex-col items-center justify-center">
      <UserLock className="size-30 text-rose-600" />
      <h2 className="text-4xl text-gray-400 uppercase font-semibold">Unauthorized</h2>
      <p className="text-lg text-rose-500 font-semibold">Access Denied</p>
    </div>
  )
}

