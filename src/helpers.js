export function fetchJSONData(endpoint, queryStr) {
    const query = endpoint + queryStr;

    return fetch(URL + query).then((response) => {
      return response.json();
    })
      .then((data) => {
        return new Promise((resolve, reject) => { resolve(data) });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  }

  export function postData(endpoint, queryStr) {
    const query = endpoint + queryStr;

    fetch(URL + query).catch(err => {
      console.error(err)
    })
  }