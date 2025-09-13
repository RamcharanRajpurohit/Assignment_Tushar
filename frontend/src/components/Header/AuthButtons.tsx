import React from 'react';
import { Button } from '@/components/UI/Button';

interface AuthButtonsProps {
  layout?: 'horizontal' | 'vertical';
  showLoginButton?: boolean;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({ 
  layout = 'horizontal',
  showLoginButton = true 
}) => {
  if (layout === 'vertical') {
    return (
      <div className="space-y-2">
        {showLoginButton && (
          <Button variant="ghost" fullWidth>
            Log in
          </Button>
        )}
        <Button variant="primary" fullWidth>
          Sign up
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {showLoginButton && (
        <Button 
          variant="ghost" 
          className="hover:bg-gray-400 transition-colors duration-400"
        >
          Log in
        </Button>
      )}
      <Button variant="primary">
        Sign up
      </Button>
    </div>
  );
};