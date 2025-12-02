import React, { useState } from 'react';
import Header from './components/ThemeLayout';
import SimplifierTool from './components/TranslatorTool';
import MainContent from './components/SeoArticle';
import { LegalModal, ModalType } from './components/LegalModals';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header onOpenModal={handleOpenModal} />
      
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="space-y-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
             <SimplifierTool />
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 border border-white/20">
            <MainContent onOpenModal={handleOpenModal} />
          </div>
        </div>
      </main>

      <LegalModal 
        isOpen={!!activeModal} 
        type={activeModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;