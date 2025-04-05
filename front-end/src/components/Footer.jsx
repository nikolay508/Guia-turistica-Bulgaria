import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="text-white font-bold text-xl">School Project</h3>
          
          {/* Creator Information */}
          <div className="space-y-2">
            <p className="text-sm">
              Created by <span className="text-blue-400">Nikolay, Bozhidar, Niya and Nina</span> - 12d
            </p>
            <p className="text-sm text-gray-400">
              Second English Language High School - Class of 2025
            </p>
          </div>

          {/* Contact/Social Links */}
          <div className="flex space-x-4 mt-2">
            <a href="mailto:your.nikolay.b.todorov@gmail.com" 
               className="hover:text-white transition-colors flex items-center">
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" 
                   strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a href="https://github.com/nikolay508" 
               className="hover:text-white transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 pt-4 border-t border-gray-800 w-full">
            © {new Date().getFullYear()} School Project. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
