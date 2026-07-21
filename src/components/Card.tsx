type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
      {children}
    </div>
  );
}