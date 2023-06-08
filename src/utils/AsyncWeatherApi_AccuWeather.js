const apiKey = "79YI8GKwgrAAiHQImyU5oGjBhNiqGgUP";

export const getWeather = async (city) => {
  try {
    // Формируем URL запроса к API
    const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;

    // Отправляем запрос и ждем ответ
    const response = await fetch(url, {
      method: "GET",
      "Accept-Language": "ru-RU",
    });

    // Проверяем, что ответ успешный
    if (!response.ok) {
      throw new Error(`Network error! Status: ${response.status}`);
    }

    // Ждем данные в формате JSON и записываем в переменную
    const data = await response.json();

    // Получаем код города для получения данных о погоде
    const locationKey = data[0].Key;

    // Получаем имя города, административный район, страну из 1-го запроса
    const localizedName = data[0].LocalizedName;
    const countryId = data[0].Country.ID;
    const administrativeArea =
      data[0].AdministrativeArea.EnglishName +
      " " +
      data[0].AdministrativeArea.EnglishType.toLowerCase();

    // Формируем URL запроса к API для получения данных о погоде
    const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true&language=ru-ru`;

    // Отправляем запрос и ждем ответ
    const weatherResponse = await fetch(weatherUrl);

    // Проверяем, что ответ успешный
    if (!weatherResponse.ok) {
      throw new Error(`Network error! Status: ${response.status}`);
    }

    // Ждем данные в формате JSON и записываем в переменную
    const weatherData = await weatherResponse.json();

    // Формируем объект с данными о погоде
    const getWeather = {
      city: localizedName,
      country: countryId,
      administrativeArea,
      temperature: weatherData[0].Temperature.Metric.Value,
      realfeel: weatherData[0].RealFeelTemperature.Metric.Phrase,
      description: weatherData[0].WeatherText,
      wind: weatherData[0].Wind.Speed.Metric.Value,
      humidity: weatherData[0].RelativeHumidity,
      icon: require("../images/weather_icons/" +
        weatherData[0].WeatherIcon +
        ".svg"),
      // icon: `https://developer.accuweather.com/sites/default/files/${weatherData[0].WeatherIcon}.svg`,
    };

    // Возвращаем объект с данными о погоде
    return getWeather;
  } catch (error) {
    console.error("Ошибка в получении данных в компоненте WeatherAPI", error);
    return { error };
  }
};
