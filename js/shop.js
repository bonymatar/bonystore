const domain = "http://82.112.241.233:1338";
const currency = "$";

const getAllBooks = async () => {
  let final = [];
  await axios
    .get(`${domain}/api/books`, {
      params: { populate: "*" },
      pagination: { pageSize: 100 },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};
