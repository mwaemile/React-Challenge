export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-6 animate-fade">
        <h1 className="text-3xl font-bold text-blue-600">Loading...</h1>
        <p className="mt-2 text-gray-600">Please wait...</p>
      </div>

      {/* Geometric loading animation */}
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-blue-700 animate-fade"></div>
        <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-b-blue-600 animate-fade"></div>
        <div className="w-10 h-10 bg-blue-600 rounded-full animate-fade"></div>
        <div className="w-10 h-10 bg-blue-600 [clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] animate-fade"></div>
      </div>
    </div>
  );
}
