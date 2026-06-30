const loading = () => {
  const tempInfo = document.querySelector(".temp-info");
  const p = document.createElement("p");
  p.textContent = "Fetching weather details...";
  tempInfo.append(p);
}

export { loading };