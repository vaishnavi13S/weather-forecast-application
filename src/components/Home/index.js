import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import CitiesTable from '../CitiesTable';

import './index.css'

const Home = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [query, setQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchCities = useCallback(async (reset = false) => {
    try {
      const res = await axios.get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${query}&rows=10&start=${reset ? 0 : page * 10}`
      );
      const data = res.data.records.map((city) => ({
        name: city.fields.name,
        countryName: city.fields.label_en,
        timezone: city.fields.timezone,
      }));
      if (reset) {
        setCitiesList(data);
      } else {
        setCitiesList((prevList) => [...prevList, ...data]);
      }
      if (data.length < 10) {
        setHasMore(false);
      }
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }, [query, page]);

  useEffect(() => {
    fetchCities(true);
  }, [query, fetchCities]); // Now, fetchCities is a stable reference due to useCallback

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
    setHasMore(true);
  };

  const handleSearchButton = (e) => {
    e.preventDefault()
    fetchCities(query)
  }

  return (
    <div className="container mx-auto">
       <div className="nav-container">
         <img src="https://static.vecteezy.com/system/resources/previews/012/066/499/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt="weather-logo" class="weather-logo"/>
      <h1 className='Weather-forecast'>Weather Forecast</h1>
      </div>
      <div className="search">
            <form onSubmit={handleSearchButton} className='search'>
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Enter city name"
              />
              <button type="submit">
                  <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="search icon" />
              </button>
            </form>
        </div>
      <InfiniteScroll
        dataLength={citiesList.length}
        next={() => fetchCities()}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more cities</p>}
      >
        <CitiesTable cities={citiesList} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;



