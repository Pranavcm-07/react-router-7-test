import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        Discover amazing content and explore new opportunities with us!
      </p>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/484/796/4/cristiano-ronaldo-wallpaper-preview.jpg"
        alt="Technology and Innovation"
        className="rounded-lg shadow-lg w-3/4 md:w-1/2 mb-6"
      />
      <div className="flex space-x-4">
        <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Learn More
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
