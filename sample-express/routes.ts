import fetch from "node-fetch";
import {query} from "express";
const routeHello = (): string => "Hello, World!";

const routeAPINames = async ():Promise<string> => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data;
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return err;
  }
  const names = data.map((item) => `id: ${item.id}, name: ${item.name}`).join("<br>");
  return names;
}

const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {

  return {
    zipcode: query.zipcode,
    weather: "sunny",
    temp: 35
  };
};

const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);


export {routeHello, routeAPINames, routeWeather};