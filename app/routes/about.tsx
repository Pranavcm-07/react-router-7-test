import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about us and our mission." },
  ];
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Welcome to our platform! We are dedicated to providing the best services and ensuring customer satisfaction. Our mission is to create meaningful solutions that impact lives.
      </p>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/484/796/4/cristiano-ronaldo-wallpaper-preview.jpg"
        alt="Team working together"
        className="rounded-lg shadow-lg w-3/4 md:w-1/2"
      />
    </div>
  );
}
