import React from 'react';
import { Upload, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

interface SubmissionLimitIndicatorProps {
  current: number;
  max: number;
  className?: string;
}

export const SubmissionLimitIndicator: React.FC<SubmissionLimitIndicatorProps> = ({
  current,
  max = 10, // Updated default to 10
  className = ''
}) => {
  const percentage = (current / max) * 100;
  const remaining = max - current;
  
  const getStatusColor = () => {
    if (percentage >= 100) return 'text-gray-600';
    if (percentage >= 80) return 'text-gray-700';
    return 'text-gray-500';
  };

  const getProgressColor = () => {
    if (percentage >= 100) return 'bg-gray-600';
    if (percentage >= 80) return 'bg-gray-700';
    return 'bg-gray-400';
  };

  const getIcon = () => {
    if (percentage >= 100) return AlertCircle;
    if (percentage >= 80) return AlertCircle;
    return CheckCircle;
  };

  const Icon = getIcon();

  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900 font-serif">Monthly Submissions</span>
        </div>
        <div className={`flex items-center space-x-1 ${getStatusColor()}`}>
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium">{current}/{max}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>
            {remaining > 0 ? `${remaining} submissions remaining` : 'Monthly limit reached'}
          </span>
          <span>{percentage.toFixed(0)}% used</span>
        </div>
      </div>

      {percentage >= 80 && (
        <div className="mt-3 p-2 bg-gray-100 rounded-md">
          <p className="text-xs text-gray-600">
            {percentage >= 100 
              ? 'You\'ve reached your monthly submission limit (10/month). Limit resets on the 1st of next month.'
              : 'You\'re approaching your monthly submission limit. Plan your remaining submissions carefully.'
            }
          </p>
        </div>
      )}
    </div>
  );
};