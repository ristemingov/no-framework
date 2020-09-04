
export function render() {
fetch("/assets/templates/head.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("head").innerHTML += data;
  });
}