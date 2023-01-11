function render() {
  const h1 = document.createElement("h1");
  const heading = document.createTextNode("..in dev..");
  h1.appendChild(heading);
  h1.style.fontSize = "10vw";
  h1.style.color = "#fff";

  const root = document.getElementById("root");
  root.appendChild(h1);

  document.body.style.fontFamily =
    "-apple-system, 'Helvetica Neue', sans-serif";
  document.body.style.backgroundColor = "#138595";

  //height
  document.querySelector("html").style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = "0";
  root.style.height = "100%";

  //title
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.style.alignItems = "center";
  root.style.justifyContent = "center";
}

document.body.onload = render;
