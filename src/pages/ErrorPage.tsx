import React from "react";
import { AlertTriangle, ChevronLeft, RefreshCcw, Home } from "lucide-react";

export interface ErrorPageProps {
  /** Title of the error page */
  title?: string;
  /** Main error message to display */
  message?: string;
  /** Additional description text */
  description?: string;
  /** Error code to display (e.g. 404, 500) */
  errorCode?: string | number;
  /** Show refresh button */
  showRefreshButton?: boolean;
  /** Show home button */
  showHomeButton?: boolean;
  /** Show back button */
  showBackButton?: boolean;
  /** Optional custom icon to use instead of default */
  icon?: React.ReactNode;
  /** Background color class */
  bgColor?: string;
  /** Text color for title */
  titleColor?: string;
  /** Text color for message */
  messageColor?: string;
  /** Text color for description */
  descriptionColor?: string;
  /** Button variant styles */
  buttonVariant?: "primary" | "secondary" | "outline";
  /** Optional image URL */
  imageUrl?: string;
  /** Function to call when refresh button is clicked */
  onRefresh?: () => void;
  /** Function to call when home button is clicked */
  onHomeClick?: () => void;
  /** Function to call when back button is clicked */
  onBackClick?: () => void;
  /** Custom content to render at the bottom */
  footerContent?: React.ReactNode;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Optional contact information */
  contactInfo?: string;
  /** Show technical details section */
  showTechnicalDetails?: boolean;
  /** Technical error details */
  technicalDetails?: string;
}

const getButtonClasses = (variant: "primary" | "secondary" | "outline") => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  switch (variant) {
    case "primary":
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
    case "secondary":
      return `${baseClasses} bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500`;
    case "outline":
      return `${baseClasses} border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`;
    default:
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
  }
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  title = "An error occurred",
  message = "We're sorry, something went wrong.",
  description = "Our team has been notified and we're working to fix the issue.",
  errorCode,
  showRefreshButton = true,
  showHomeButton = true,
  showBackButton = true,
  icon,
  bgColor = "bg-gray-50",
  titleColor = "text-gray-900",
  messageColor = "text-gray-600",
  descriptionColor = "text-gray-500",
  buttonVariant = "primary",
  imageUrl,
  onRefresh = () => window.location.reload(),
  onHomeClick = () => (window.location.href = "/"),
  onBackClick = () => window.history.back(),
  footerContent,
  className = "",
  contactInfo,
  showTechnicalDetails = false,
  technicalDetails,
}) => {
  const defaultIcon = <AlertTriangle className="w-16 h-16 text-red-500" />;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${bgColor} ${className}`}
    >
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">{icon || defaultIcon}</div>

          {errorCode && (
            <div className="mb-2 text-4xl font-bold text-gray-400">
              {errorCode}
            </div>
          )}

          <h1 className={`text-2xl font-bold mb-2 ${titleColor}`}>{title}</h1>

          <p className={`text-lg mb-2 ${messageColor}`}>{message}</p>

          <p className={`mb-6 ${descriptionColor}`}>{description}</p>

          {imageUrl && (
            <div className="mb-6">
              <img
                src={imageUrl}
                alt="Error illustration"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center">
            {showRefreshButton && (
              <button
                onClick={onRefresh}
                className={getButtonClasses(buttonVariant)}
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Refresh
              </button>
            )}

            {showHomeButton && (
              <button
                onClick={onHomeClick}
                className={getButtonClasses(buttonVariant)}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </button>
            )}

            {showBackButton && (
              <button
                onClick={onBackClick}
                className={getButtonClasses(buttonVariant)}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            )}
          </div>

          {contactInfo && (
            <div className="mt-6 text-sm text-gray-500">
              <p>{contactInfo}</p>
            </div>
          )}

          {showTechnicalDetails && technicalDetails && (
            <div className="mt-6 w-full">
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Technical Details
                </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto text-gray-800">
                  {technicalDetails}
                </div>
              </details>
            </div>
          )}

          {footerContent && <div className="mt-6 w-full">{footerContent}</div>}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
