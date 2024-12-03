const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.terbine.io:8443/api/domain/country", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));