const content = document.querySelector(".input input");
const seePassword = document.querySelector(".see-pass");

seePassword.addEventListener("click", () => {
  const type =
    content.getAttribute("type") === "password" ? "text" : "password";
  content.setAttribute("type", type);
});
