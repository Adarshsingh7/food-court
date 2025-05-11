import { useState } from "react";
import { Search, ArrowRight, Clock, Map, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RestroListPage() {
  const [restaurantId, setRestaurantId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/menu");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Discover the Best{" "}
            <span className="text-amber-500">Restaurants</span> Near You
          </h1>
          <p className="text-gray-600 max-w-2xl mb-12 text-lg">
            Find and explore top-rated restaurants, cafes, and bars with just a
            few clicks.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Enter Restaurant ID"
                className="w-full py-4 px-6 pr-12 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={restaurantId}
                onChange={(e) => setRestaurantId(e.target.value)}
              />
              <Search
                className="absolute right-4 top-4 text-gray-400"
                size={20}
              />
            </div>
            <button
              onClick={handleSearch}
              className="py-4 px-8 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Go <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Search size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Find Restaurants
              </h3>
              <p className="text-gray-600">
                Discover new dining experiences with our comprehensive search.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Star size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Read Reviews
              </h3>
              <p className="text-gray-600">
                See what others are saying about your favorite places to eat.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <Clock size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Book a Table
              </h3>
              <p className="text-gray-600">
                Make reservations instantly with our easy booking system.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Restaurants */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Featured Restaurants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={`https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/restro-bar1--1-.jpg`}
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-medium text-amber-600 flex items-center">
                  <Star size={14} className="mr-1" />
                  4.8
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Restaurant {i}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Map size={14} className="mr-1" />
                  <span>Downtown • 1.2 miles away</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Specializing in authentic cuisine with a modern twist.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-medium">
                    ID: REST{1000 + i}
                  </span>
                  <button className="text-amber-500 hover:text-amber-600 flex items-center">
                    View <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to explore?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Enter a restaurant ID to view details, menus, reviews, and make
            instant reservations.
          </p>
          <div className="w-full max-w-lg mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Enter Restaurant ID"
                className="w-full py-3 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                value={restaurantId}
                onChange={(e) => setRestaurantId(e.target.value)}
              />
              <Search
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
            <button
              onClick={handleSearch}
              className="py-3 px-6 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              Search <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
