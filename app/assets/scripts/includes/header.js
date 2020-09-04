
export function render() {
  fetch("/assets/templates/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#header").innerHTML = data;
  });
}
