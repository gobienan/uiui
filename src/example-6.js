const reveal = async () => {
  const headline = document.querySelector(".uiui.example-6");
  const parts = headline.innerHTML.split("<br>");
  headline.innerHTML = parts.map((p) => `<span>${p}</span>`).join("<br>");
};

reveal();
