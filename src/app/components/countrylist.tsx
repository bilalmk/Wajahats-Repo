// components/CountryList.tsx
import Link from 'next/link';

const CountryList = () => {
  const countries = ['canada', 'usa', 'mexico', 'brazil', 'japan',];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-8">Country List</h1>
      <ul className="space-y-4">
        {countries.map((country) => (
          <li key={country}>
            <Link href={`/country/${country}`}>
              <a className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
                {country.toUpperCase()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
