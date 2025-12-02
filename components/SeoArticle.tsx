import React, { useState } from 'react';
import { ModalType } from './LegalModals';

interface ContentProps {
  onOpenModal: (type: ModalType) => void;
}

const MainContent: React.FC<ContentProps> = ({ onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 space-y-12">
      {/* Introduction Section (Always Visible) */}
      <section className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Read Smarter, Learn Faster</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Doodax.com is the ultimate intelligent text simplification tool designed for students, educators, and lifelong learners. Unlock the meaning of complex texts in seconds.
        </p>
      </section>

      {/* Hero Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900">Instant Simplification</h3>
                        <p className="mt-1 text-gray-600">Enter hard sentences or whole chapters. We simplify the vocabulary while keeping the meaning intact.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900">Active Learning</h3>
                        <p className="mt-1 text-gray-600">Click words you don't know to see and hear definitions. Build your personal vocabulary list automatically.</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-inner">
                <img src="https://storage.googleapis.com/aistudio-hosting/images/doodax/from-frustration.png" alt="Diagram showing the transition from frustration to understanding" className="w-full h-auto rounded-lg mix-blend-multiply opacity-90" />
            </div>
      </div>

      {/* SEO Article Dropdown */}
      <section className="relative border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Guide to Text Simplification</h2>
        
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-full opacity-100' : 'max-h-24 opacity-80'}`}>
            {/* The Huge SEO Content Content */}
            <article className="prose prose-blue max-w-none text-gray-600">
                <p className="lead">
                    In today's information-heavy world, the ability to quickly comprehend and analyze complex text is a superpower. Doodax.com stands at the forefront of educational technology, providing a robust, free, and intelligent solution for text simplification. This guide explores everything you need to know about optimizing your reading experience.
                </p>

                <h3>Table of Contents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li>1. The Science of Simplification</li>
                    <li>2. How Doodax Algorithms Work</li>
                    <li>3. Benefits for ESL Learners</li>
                    <li>4. Tools for Educators</li>
                    <li>5. Features Deep Dive</li>
                    <li>6. Frequently Asked Questions</li>
                </ul>

                <h3>1. The Science of Simplification</h3>
                <p>
                    Reading comprehension is cognitive load management. When a reader encounters low-frequency vocabulary (tier 2 and tier 3 words), working memory is taxed, leading to a breakdown in understanding. Doodax.com acts as a cognitive scaffold. By replacing "utilize" with "use" or "obfuscate" with "hide," we lower the barrier to entry without diluting the core message.
                </p>
                <p>
                    Studies have shown that lexical simplification can improve reading speed by up to 25% and retention by 40% for non-native speakers. This isn't just about changing words; it's about democratizing access to information found in medical journals, legal documents, and classic literature.
                </p>

                <h3>2. How Doodax Algorithms Work</h3>
                <p>
                    Unlike basic thesaurus tools, Doodax employs context-aware natural language processing (NLP). The engine analyzes the syntactic structure of sentences to ensure that replacements maintain grammatical correctness.
                </p>
                <ul>
                    <li><strong>Contextual Analysis:</strong> The word "bank" means something different in "river bank" versus "bank account". Our system distinguishes these nuances.</li>
                    <li><strong>Part-of-Speech Tagging:</strong> We identify nouns, verbs, adjectives, and adverbs to ensure replacements fit the sentence structure.</li>
                    <li><strong>Complexity Scoring:</strong> Text is graded against indices like Flesch-Kincaid to determine the necessary level of simplification.</li>
                </ul>

                <h3>3. Benefits for ESL Learners</h3>
                <p>
                    For English as a Second Language (ESL) learners, the gap between conversational English and academic English is vast. Doodax bridges this gap by offering "scaffolded reading." Learners can read the simplified text to get the gist, then toggle to the original to learn the advanced vocabulary in context. This "i+1" learning model (Input Hypothesis) is critical for language acquisition.
                </p>

                <h3>4. Features Deep Dive</h3>
                <h4>Vocabulary Lists</h4>
                <p>
                    Every time you simplify text, Doodax identifies the "target words" you likely didn't know. These can be exported into learning sessions, flashcards, or printed quizzes.
                </p>
                <h4>Browser Integration</h4>
                <p>
                    Doodax isn't just a destination website; it's a tool that integrates with your browsing habits. (Future roadmap includes Chrome Extensions).
                </p>

                <h3>5. Frequently Asked Questions (FAQ)</h3>
                <div className="space-y-4 not-prose">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-bold text-gray-900">Is Doodax completely free?</h5>
                        <p>Yes, Doodax is supported by a passion for education. There are no paywalls for the core simplification features.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-bold text-gray-900">Does it work on mobile?</h5>
                        <p>Absolutely. Doodax is a Progressive Web App (PWA) compatible design that works flawlessly on iOS and Android browsers.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-bold text-gray-900">Can I save my simplified texts?</h5>
                        <p>Currently, sessions are temporary for privacy, but we are rolling out user accounts where you can save libraries of simplified texts.</p>
                    </div>
                </div>

                <h3>6. The Future of Literacy</h3>
                <p>
                    As AI continues to evolve, Doodax aims to integrate more advanced summarization and translation features. Our goal is a world where language is never a barrier to knowledge. Whether you are a PhD student parsing dense theory or a middle schooler reading Shakespeare, Doodax is your companion in comprehension.
                </p>
                <p>
                    Join thousands of users who are reading smarter, not harder. Start simplifying today.
                </p>
            </article>
        </div>
        
        <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-0 ${isExpanded ? 'hidden' : 'block'}`}></div>
        
        <div className="text-center mt-4">
            <button 
                onClick={toggleReadMore} 
                className="inline-flex items-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
                {isExpanded ? (
                    <>Show Less <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg></>
                ) : (
                    <>Read More <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></>
                )}
            </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Get started now!</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <p className="text-blue-100 text-lg">Here's what to do next:</p>
                <ul className="space-y-3">
                    <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Try the text box above.</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Check out the Demo.</li>
                    <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Share with your students.</li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                 <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition transform hover:scale-105">
                     Simplify Text Now
                 </button>
            </div>
        </div>
      </section>
      
      <Footer onOpenModal={onOpenModal}/>
    </div>
  );
};

const Footer: React.FC<ContentProps> = ({ onOpenModal }) => {
    return (
        <footer className="mt-12 border-t border-gray-200 pt-8">
            <div className="text-center text-sm text-gray-500">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <button onClick={() => window.scrollTo(0,0)} className="hover:text-blue-600 hover:underline">Home</button>
                    <button onClick={() => onOpenModal('about')} className="hover:text-blue-600 hover:underline">About</button>
                    <button onClick={() => onOpenModal('guide')} className="hover:text-blue-600 hover:underline">Educator Central</button>
                    <button onClick={() => onOpenModal('guide')} className="hover:text-blue-600 hover:underline">Help Center</button>
                    <button onClick={() => onOpenModal('privacy')} className="hover:text-blue-600 hover:underline">Privacy</button>
                    <button onClick={() => onOpenModal('terms')} className="hover:text-blue-600 hover:underline">Terms</button>
                    <button onClick={() => onOpenModal('dmca')} className="hover:text-blue-600 hover:underline">DMCA</button>
                    <button onClick={() => onOpenModal('contact')} className="hover:text-blue-600 hover:underline">Contact Us</button>
                </div>
                <p className="max-w-2xl mx-auto mb-4">Site summary: Doodax.com helps with reading comprehension and vocabulary development by simplifying English. It's a dictionary alternative that allows users to learn words in context. It's designed for anyone who wants to improve reading skills.</p>
                <p className="mt-4 font-medium">&copy; {new Date().getFullYear()} Doodax.com. All rights reserved.</p>
                 <div className="mt-4 text-xs text-gray-400 flex justify-center items-center space-x-2">
                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">doodax.com</a>
                    <span>|</span>
                    <a href="mailto:hsini.web@gmail.com" className="hover:text-gray-600">hsini.web@gmail.com</a>
                </div>
                <div className="mt-6 pb-4">
                     <p className="text-xs">
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:text-blue-700 hover:underline">HSINI MOHAMED</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default MainContent;