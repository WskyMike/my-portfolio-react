import { API_KEY, API_URL } from "./constants";
// const perPage = 30; // количество фотографий на странице &perPage=${perPage}

function UnsplashApi(query, page) {
  return (
    fetch(`${API_URL}/search/photos/?&query=${query}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      // Консольный вывод полученных данных в формате JSON
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((error) => {
        console.error("Ошибка при выполнении fetch - запроса.", error);
      })
  );
}

export default UnsplashApi;
