// data/countries.ts
export interface Country {
    name: string;
    population: string;
    capital: string;
  }
  
  export const countries: Record<string, Country> = {
    canada: { name: 'Canada', population: '38 million', capital: 'Ottawa' },
    usa: { name: 'United States', population: '331 million', capital: 'Washington D.C.' },
    mexico: { name: 'Mexico', population: '126 million', capital: 'Mexico City' },
    brazil: { name: 'Brazil', population: '213 million', capital: 'Brasília' },
    japan: { name: 'Japan', population: '125 million', capital: 'Tokyo' }
   
  };
  