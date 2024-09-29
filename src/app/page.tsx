// app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-6 text-red-700 font-sans">Welcome to the Country Info App</h1>
      <p className="text-xl mb-8 font-sans">Click below to explore country details:</p>
      <Link href="/country">
        {/* Just use Link without <a> */}
        <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition font-sans">
          Go to Country List
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
