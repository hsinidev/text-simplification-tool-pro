import React, { useState } from 'react';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Rewordified');
    const tabs = ['Rewordified Text', 'Stats', 'Share', 'Print / Learning', 'Parts of speech'];

    return (
        <div className="border-b border-gray-100">
            <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.split(' ')[0])}
                        className={`${
                            activeTab === tab.split(' ')[0]
                                ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm transition-all duration-200 rounded-t-lg`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
        </div>
    );
};

const SimplifierTool: React.FC = () => {
    const rewordifiedContent = `
        <div class="space-y-2">
        <p>Enter English text or a web page URL to <span class="bg-yellow-200 px-1 rounded shadow-sm text-yellow-900 font-medium">make it simpler to read</span>.</p>
        <p>Doodax.com intelligently <span class="bg-yellow-200 px-1 rounded shadow-sm text-yellow-900 font-medium">simplifies hard vocabulary</span> and <span class="bg-yellow-200 px-1 rounded shadow-sm text-yellow-900 font-medium">teaches</span> over 58,000 difficult words.</p>
        </div>
    `;
    
    return (
        <section className="bg-white/80 p-0 sm:p-0">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800">Simple Language Translator</h2>
                <p className="text-gray-500 text-sm mt-1">Paste your text below to instantly improve readability.</p>
            </div>
            
            <div className="p-6">
                <Tabs />

                <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-900 flex items-start shadow-sm">
                    <svg className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <strong>Nothing was rewordified yet.</strong> The text input is currently empty. Doodax.com will intelligently simplify (and teach) over 58,000 difficult words once you start typing.
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="text-input" className="block text-sm font-semibold text-gray-700 mb-2 pl-1">
                        Input Content
                    </label>
                    <div className="relative rounded-xl shadow-sm">
                        <textarea
                            id="text-input"
                            rows={8}
                            className="block w-full bg-yellow-50/50 border-gray-200 rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-5 transition-all duration-300 ease-in-out placeholder-gray-400"
                            placeholder="Paste your text here or start typing to simplify..."
                        ></textarea>
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                            0 words
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:-translate-y-0.5">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                        Rewordify Text
                    </button>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Output Preview</h3>
                    <div 
                        className="text-gray-700 p-6 border border-gray-100 rounded-xl bg-gray-50/80 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: rewordifiedContent }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SimplifierTool;