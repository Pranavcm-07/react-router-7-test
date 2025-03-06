import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to Our Website" },
    { name: "description", content: "Discover our platform and explore new possibilities!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        Hi Pranav! Explore our platform and experience the best services tailored for you.
      </p>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/484/796/4/cristiano-ronaldo-wallpaper-preview.jpg"
        alt="Technology and Innovation"
        className="rounded-lg shadow-lg w-3/4 md:w-1/2"
      />
    </div>
  );
}
