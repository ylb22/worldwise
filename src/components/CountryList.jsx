import CountryItem from "./CountryItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContexts";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
CountryList.propTypes = {
  cities: PropTypes.string.isRequired,
  isLoading: PropTypes.string.isRequired, // Add the missing prop type validation
  // Add the missing prop type validation
};

export default CountryList;
