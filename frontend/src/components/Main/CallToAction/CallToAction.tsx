import React from 'react';
import { Button } from '@/components/UI/Button';

export const CallToAction: React.FC = () => {
  return (
    <div className="text-center mt-10 mb-20 font-bold text-black flex justify-center items-center gap-2 flex-col sm:flex-row">
      <p>EXPERIENCE THE FULL AUDIO AI PLATFORM</p>
      <Button variant="primary" size ="lg">
        SIGN UP
      </Button>
    </div>
  );
};