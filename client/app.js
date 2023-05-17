console.log("test");
// DDOS

fetch("http://127.0.0.1:8000/api/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const ulElm = document.getElementById("list");
    const html = data.results.map((item) => `<li>${item.task}</li>`);
    ulElm.innerHTML = html.join("");
  });
