import { useState } from "react";
import { CardWeatherLoading } from "./components/cardWeatherLoading";
import { CardWeather } from "./components/cardWeather";
import { useFetch } from "./hooks/useFetch";

function App() {
	const [search, setSearch] = useState("havana");
	const url = `https://api.openweathermap.org/data/2.5/weather?appid=2da6f30081886f35583c6e666621288f&q=${search}&units=metric`;

	const { data, isLoading } = useFetch(url);
	const { main, name, sys, wind, weather } = !!data && data;

	const onSearch = (search) => {
		setSearch(search);
	};

	return isLoading ? (
		<CardWeatherLoading />
	) : (
		<>
			<CardWeather
				onSearch={onSearch}
				main={main}
				name={name}
				weather={weather}
				sys={sys}
				wind={wind}
			/>
		</>
	);
}

export default App;
