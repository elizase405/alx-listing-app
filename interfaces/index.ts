// Define all TypeScript interfaces related to the project.
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}