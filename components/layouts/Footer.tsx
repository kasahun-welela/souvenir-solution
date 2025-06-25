import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg">Souvenir</span>
          </div>
          <p className="text-gray-400 text-center md:text-right">
            © 2025 Souvenir. All rights reserved. Creating memories that last
            forever.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
