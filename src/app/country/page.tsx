// app/country/page.tsx
import Link from 'next/link';

// Helper function to generate random colors
const getRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
];
// Pick a random color from the list
return colors[Math.floor(Math.random() * colors.length)];
};

const CountryList = () => {
const countries = ['canada', 'usa', 'mexico', 'brazil', 'japan'];

return (
  <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 font-sans">
    <h1 className="text-4xl font-bold mb-4 font-sans ">Country List</h1>
    <ul className="space-y-10">
      {countries.map((country) => (
        <li key={country}>
          <Link
            href={`/country/${country}`}
            className={`${getRandomColor()} text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-80 transition`}
          >
            {country.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default CountryList;

