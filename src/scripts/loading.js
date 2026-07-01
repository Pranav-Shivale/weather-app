const loading = () => {
  const tempInfo = document.querySelector(".temp-info");
  const p = document.createElement("p");
  p.classList.add("loading");
  p.textContent = "Fetching weather details...";
  tempInfo.append(p);
};

const stopLoading = () => {
  const tempInfo = document.querySelector(".temp-info");
  const p = document.querySelector(".loading");
  tempInfo.removeChild(p);
};

export { loading, stopLoading };
