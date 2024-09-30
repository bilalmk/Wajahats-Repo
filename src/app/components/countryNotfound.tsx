interface CountryNotFoundProps {
    countryName: string;
  }
  const CountryNotFound: React.FC<CountryNotFoundProps> = ({ countryName }) => {
    console.log(`CountryNotFound is being rendered for ${countryName}`);
  
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-red-600">Country not found</h1>
        <p className="text-lg mt-4">
          We could not find details for the country: <strong>{countryName}</strong>
        </p>
      </div>
    );
  };
  
  export default CountryNotFound;
  
  
  
