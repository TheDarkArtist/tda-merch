import type { Route } from "./+types/city"

export const loader = async ({ params }: Route.LoaderArgs) => {
  return { slug: params.city }
}

const City = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div>{loaderData.slug}</div>
  )
}

export default City
