const getAllCats = async () => {
  let final = [];
  await axios
    .get("http://82.112.241.233:1338/api/categories", {
      params: { populate: "*" },
      pagination: { pageSize: 100 },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};

const getAllBooks = async () => {
  let final = [];
  await axios
    .get("http://82.112.241.233:1338/api/books", {
      params: { populate: "*" },
      pagination: { pageSize: 100 },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};

getAllBooks().then((res) => {
  console.log(res);
});

getAllCats().then((res) => {
  document.querySelector("#catsMain").innerHTML = "";
  res.forEach((el) => {
    document.querySelector("#catsMain").innerHTML += `            
    <li>
        <a href="shop-details.html">
            <span>${el.name}</span>
            <span>${el.books.length}</span>
        </a>
    </li>
    `;
  });
});
