import React from "react";

type CardSize = "sm" | "md" | "lg" | "xl";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  centered?: boolean;
  size?: CardSize; // new prop for width
}

export function Card({
  children,
  className = "",
  centered = false,
  size = "md",
  ...props
}: CardProps) {
  // Map size prop to Tailwind width classes
  const sizeClasses: Record<CardSize, string> = {
    sm: "max-w-sm", // ~24rem
    md: "max-w-md", // ~28rem
    lg: "max-w-lg", // ~32rem
    xl: "max-w-xl", // ~36rem
  };

  const cardClasses = `rounded-2xl shadow-md hover:shadow-white p-6 w-full ${sizeClasses[size]} ${className}`;

  const card = (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );

  if (centered) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {card}
      </div>
    );
  }

  return card;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
}
