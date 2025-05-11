import { UtensilsCrossed, Home, ArrowLeft } from "lucide-react";

const PageNotFound = () => {
  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    // We'll use window.location instead of navigate to avoid dependencies
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-amber-500 p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <UtensilsCrossed size={36} className="text-amber-500" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-1">404</h1>
          <p className="text-white text-lg">Recipe Not Found</p>
        </div>

        {/* Body */}
        <div className="p-8 text-center">
          <p className="text-gray-700 text-xl font-medium mb-6">
            We couldn't find the dish you were looking for.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <button
              onClick={goBack}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

            <button
              onClick={goHome}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors font-medium"
            >
              <Home size={18} />
              Return Home
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-amber-50 p-4 text-center border-t border-amber-100">
          <p className="text-amber-800 text-sm">
            Visit our homepage to see our full menu of options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
