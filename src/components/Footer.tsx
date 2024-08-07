import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <h1 className="text-2xl font-bold">Food Court</h1>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/about"
            >
              About Us
            </a>
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/menu"
            >
              Menu
            </a>
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/locations"
            >
              Locations
            </a>
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/careers"
            >
              Careers
            </a>
            <a
              className="text-teal-600 transition hover:text-teal-600/75"
              href="/privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-sm text-gray-600">
              <p>
                &copy; 2024 Food Court. All rights reserved.
              </p>
            </div>

            <div className="mt-6 flex justify-center space-x-6 sm:mt-0">
              <a
                className="text-teal-600 transition hover:text-teal-600/75"
                href="https://facebook.com/foodcourt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                className="text-teal-600 transition hover:text-teal-600/75"
                href="https://twitter.com/foodcourt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                className="text-teal-600 transition hover:text-teal-600/75"
                href="https://instagram.com/foodcourt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                className="text-teal-600 transition hover:text-teal-600/75"
                href="https://linkedin.com/company/foodcourt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
