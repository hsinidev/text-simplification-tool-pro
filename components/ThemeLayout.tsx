import React from 'react';
import { ModalType } from './LegalModals';

interface HeaderProps {
  onOpenModal: (type: ModalType) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="group">
              <span className="sr-only">Doodax.com</span>
              <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 tracking-tight group-hover:from-blue-600 group-hover:to-teal-500 transition-all duration-300">
                Doodax.com
              </h1>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => onOpenModal('about')} className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => onOpenModal('guide')} className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">Guide</button>
            <button onClick={() => onOpenModal('contact')} className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            <button onClick={() => onOpenModal('privacy')} className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">Privacy</button>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
             <div className="hidden lg:flex flex-col items-end text-xs text-gray-500 mr-4">
                <span>Reading time: 0s</span>
                <span>Points: 0</span>
            </div>
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Log in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;