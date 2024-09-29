import { countries } from '../../data/countries'; // Path to countries data
import CountryDetails from '../../components/countrydetails';
import CountryNotFound from '../../components/countryNotfound';

interface CountryPageProps {
params: { country_name: string };
}

const CountryPage: React.FC<CountryPageProps> = ({ params }) => {
const { country_name } = params;
const country = countries[country_name.toLowerCase()]; // Ensure case-insensitive matching

if (!country) {
// Render CountryNotFound if the country isn't in the data
return <CountryNotFound countryName={country_name} />;
}

return (
<CountryDetails
name={country.name}
population={country.population}
capital={country.capital}
/>
);
};

export default CountryPage;