interface CountryDetailsProps {
    name: string;
    population: string;
    capital: string;
  }
  
  const CountryDetails: React.FC<CountryDetailsProps> = ({ name, population, capital }) => {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
        <h1 className="text-5xl font-bold mb-6">{name}</h1>
        <p className="text-xl mb-4"><strong>Population:</strong> {population}</p>
        <p className="text-xl"><strong>Capital:</strong> {capital}</p>
      </div>
    );
  };
  
  export default CountryDetails;
  
