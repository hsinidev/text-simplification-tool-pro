import React from 'react';

export type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface LegalModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}

const getModalContent = (type: ModalType) => {
  const commonDisclaimer = (
    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-800">
      <p className="font-bold">Google Policy & Data Disclaimer</p>
      <p>This application adheres to strict data privacy standards. We do not collect personal identification information without consent. Please review our full Privacy Policy for details on how data is handled in compliance with global standards.</p>
    </div>
  );

  switch (type) {
    case 'about':
      return {
        title: "About Doodax.com",
        content: (
          <div className="space-y-4">
            <p>Doodax.com is a premier text simplification tool designed to bridge the gap between complex language and comprehension. Founded by Hsini Mohamed, our mission is to make information accessible to everyone, regardless of their reading level or native language.</p>
            <p>Our website is <strong>doodax.com</strong> and you can reach us at <strong>hsini.web@gmail.com</strong>.</p>
            {commonDisclaimer}
          </div>
        )
      };
    case 'contact':
      return {
        title: "Contact Us",
        content: (
          <div className="space-y-4">
            <p>We'd love to hear from you! Whether you have a suggestion, a bug report, or just want to say hello.</p>
            <ul className="list-disc pl-5">
              <li><strong>Email:</strong> hsini.web@gmail.com</li>
              <li><strong>Website:</strong> doodax.com</li>
            </ul>
            <p>For DMCA or legal inquiries, please specify the subject line accordingly.</p>
            {commonDisclaimer}
          </div>
        )
      };
    case 'guide':
      return {
        title: "User Guide",
        content: (
          <div className="space-y-4">
            <h4 className="font-bold">How to use Doodax:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Copy any difficult English text from a website or document.</li>
              <li>Paste it into the yellow box on our homepage.</li>
              <li>Click "Rewordify text".</li>
              <li>Read the simplified version! You can click on highlighted words to see their definitions.</li>
            </ol>
            {commonDisclaimer}
          </div>
        )
      };
    case 'privacy':
      return {
        title: "Privacy Policy",
        content: (
          <div className="space-y-4">
            <p>Your privacy is critically important to us. At Doodax.com, we have a few fundamental principles:</p>
            <ul className="list-disc pl-5">
              <li>We don't ask you for personal information unless we truly need it.</li>
              <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
              <li>We don't store personal information on our servers unless required for the on-going operation of one of our services.</li>
            </ul>
            {commonDisclaimer}
          </div>
        )
      };
    case 'terms':
      return {
        title: "Terms of Service",
        content: (
          <div className="space-y-4">
            <p>By accessing Doodax.com, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <p>Use License: Permission is granted to temporarily use the materials (information or software) on Doodax.com for personal, non-commercial transitory viewing only.</p>
            {commonDisclaimer}
          </div>
        )
      };
    case 'dmca':
      return {
        title: "DMCA Policy",
        content: (
          <div className="space-y-4">
            <p>Doodax.com respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to hsini.web@gmail.com.</p>
            {commonDisclaimer}
          </div>
        )
      };
    default:
      return { title: "", content: null };
  }
};

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const { title, content } = getModalContent(type);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-xl leading-6 font-medium text-gray-900 border-b pb-2 mb-4" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2 text-sm text-gray-600">
                  {content}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};