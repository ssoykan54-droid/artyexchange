import React, { useState, useRef, useEffect } from 'react';
import { Hash, X } from 'lucide-react';
import { popularHashtags } from '../../data/mockData';

interface HashtagInputProps {
  hashtags: string[];
  onChange: (hashtags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
}

export const HashtagInput: React.FC<HashtagInputProps> = ({
  hashtags,
  onChange,
  placeholder = "Add hashtags...",
  maxTags = 10
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = popularHashtags.filter(tag => 
        tag.toLowerCase().includes(inputValue.toLowerCase()) &&
        !hashtags.includes(tag)
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [inputValue, hashtags]);

  const addHashtag = (tag: string) => {
    if (hashtags.length < maxTags && !hashtags.includes(tag)) {
      onChange([...hashtags, tag]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const removeHashtag = (tagToRemove: string) => {
    onChange(hashtags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === ',') {
      e.preventDefault();
      if (inputValue.trim()) {
        const cleanTag = inputValue.trim().replace(/^#/, '').toLowerCase();
        addHashtag(cleanTag);
      }
    } else if (e.key === 'Backspace' && !inputValue && hashtags.length > 0) {
      removeHashtag(hashtags[hashtags.length - 1]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 font-serif">
        Hashtags <span className="text-gray-500">({hashtags.length}/{maxTags})</span>
      </label>
      
      <div className="relative">
        <div className="min-h-[3rem] p-3 border border-gray-250 rounded-lg focus-within:ring-2 focus-within:ring-gray-400 focus-within:border-transparent transition-all duration-200 bg-white">
          <div className="flex flex-wrap gap-2 mb-2">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
              >
                <Hash className="w-3 h-3 mr-1" />
                {tag}
                <button
                  type="button"
                  onClick={() => removeHashtag(tag)}
                  className="ml-1 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={hashtags.length === 0 ? placeholder : ""}
            className="w-full border-none outline-none text-sm"
            disabled={hashtags.length >= maxTags}
          />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-elegant max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => addHashtag(suggestion)}
                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
              >
                <Hash className="w-3 h-3 mr-2 text-gray-400" />
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <p className="text-xs text-gray-500">
        Press Enter, Space, or Comma to add tags. Popular: {popularHashtags.slice(0, 3).join(', ')}
      </p>
    </div>
  );
};