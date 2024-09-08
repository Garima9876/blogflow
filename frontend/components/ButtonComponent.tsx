import { Button } from "@/components/ui/button";
import React from 'react';

type ButtonComponentProps = {
  onClick: () => void;
  variant?: 'primary' | 'danger';
  label: string;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick, variant = 'primary', label }) => {
  return (
    <Button
      onClick={onClick}
      className={`${
        variant === 'primary'
          ? 'bg-blue-500 hover:bg-blue-600 text-white'
          : 'bg-red-500 hover:bg-red-600 text-white'
      } px-4 py-2 rounded transition duration-200 ease-in-out`}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;