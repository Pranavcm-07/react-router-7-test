import { Link } from "react-router";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        We are dedicated to providing top-quality services and innovative solutions to our customers. Our mission is to create an impact with technology and creativity.
      </p>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/484/796/4/cristiano-ronaldo-wallpaper-preview.jpg"
        alt="Team working together"
        className="rounded-lg shadow-lg w-3/4 md:w-1/2 mb-6"
      />
      <div className="flex space-x-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go Home
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
