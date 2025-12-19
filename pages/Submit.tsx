import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import { CATEGORIES_LIST } from '../constants';

const SubmitPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Thanks for contributing to HeroGrids. Our team will review your submission shortly.
          You'll receive an email once it's live.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Submit a Hero</h1>
        <p className="text-gray-500">
          Found a stunning hero section? Share it with the community.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        
        {/* URL Input */}
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Website URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="url"
            required
            placeholder="https://example.com"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
          <p className="mt-1 text-xs text-gray-500">We'll automatically fetch the screenshot.</p>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CATEGORIES_LIST.filter(c => c !== 'All').map((cat) => (
              <label key={cat} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="category" value={cat} className="h-4 w-4 text-black border-gray-300 focus:ring-black" required />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
           <label htmlFor="stack" className="block text-sm font-medium text-gray-700 mb-1">
            Tech Stack
          </label>
          <input
            type="text"
            id="stack"
            placeholder="e.g. React, Webflow, Framer, Tailwind"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </div>

        {/* Image Upload (Optional override) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Screenshot (Optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors cursor-pointer">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
          <p className="mt-1 text-xs text-gray-500">We'll only notify you when it's live.</p>
        </div>

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Submit for Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitPage;