interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}
interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountry {
  name: string;
  capital: string;
  subregion: string;
  region: string;
  population: number;
  topLevelDomain: Array<string>;
  borders: Array<string>;
  nativeName: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: Array<ICurrency>;
  languages: Array<ILanguage>;
  independent: boolean;
}

export interface IFilterCountry {
  flags: {
    svg: string;
    png: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      bar: {
        official: string;
        common: string;
      };
    };
  };
  tld: Array<string>;
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    };
  };
  capital: Array<string>;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  languages: {
    bar: string;
  };
  population: number;
}

export interface ICountryList {
  countries: ICountry[];
  regionalCountries: IFilterCountry[];
  country: ICountry | null;
  loading: boolean;
  isFilter: boolean;
}
