let click = 0;
document.getElementById("spawnElement").addEventListener("click", () => {
  console.log("helo");
  click = click + 1;
  document.getElementById(
    "eleContainer"
  ).innerHTML += `<div class="check" style='height: 100px; width: 100px; background: lime;'>My Message ${click}</div>`;

  setTimeout(() => {
    document.querySelector(".check").remove();
  }, 5000);
});
