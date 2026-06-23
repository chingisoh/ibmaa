function toggleSolution(id, btn) {
  const solution = document.getElementById(id);

  if (solution.style.display === "none" || solution.style.display === "") {
    solution.style.display = "block";
    btn.textContent = "Hide Solution";
  } else {
    solution.style.display = "none";
    btn.textContent = "Show Solution";
  }
}