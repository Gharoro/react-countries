import axios from "axios";

const countryService = {
  async getAllCountries() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,tld,region,subregion,languages,flags,population,alpha3Code"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getCountry(country_name: string) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${country_name}?fields=name,capital,currencies,tld,region,subregion,languages,flags,population,topLevelDomain,nativeName,borders`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getCountryByCode(country_code: string) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${country_code}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getRegionalCountries(region: string) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getSearchCountries(name: string) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fields=population,name,capital,currencies,tld,region,subregion,languages,flags,topLevelDomain,nativeName`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default countryService;
