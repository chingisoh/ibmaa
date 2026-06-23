function toggleSolution(id, btn) {
  const el = document.getElementById(id);

  if (!el) {
    console.log("Element not found:", id);
    return;
  }

  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
    btn.textContent = "Hide Solution";
  } else {
    el.style.display = "none";
    btn.textContent = "Show Solution";
  }
}

function toggleHint(id, btn) {
  const el = document.getElementById(id);

  if (!el) return;

  const isHidden = el.style.display === "none" || el.style.display === "";

  if (isHidden) {
    el.style.display = "block";
    btn.textContent = "Hide Content";
  } else {
    el.style.display = "none";
    btn.textContent = "Show Content";
  }
}