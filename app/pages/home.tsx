import type { Route } from "./+types/hello";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "TDA Merch" },
    { name: "description", content: "Welcome to TDA Merch" },
  ];
}

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-full max-w-screen-2xl mx-auto">
      <h1>Well, Hello there, This is your homepage</h1>
    </div>
  );
}
