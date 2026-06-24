<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - GDC Skills for Graph Sketching

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcGDCGrid"> I can draw the graph of a function accurately on a given grid with the help of the GDC. </li>
  <li><input type="checkbox" id="funcGDCIntercept"> I can find the intercepts of a graph using the GDC. </li>
  <li><input type="checkbox" id="funcGDCAsymp"> I can deduce the asymptotes of a graph with the help of the GDC. </li>
  <li><input type="checkbox" id="funcGDCMaxMin"> I can find the coordinates of maximum and minimum points of a graph using the GDC. </li>
  <li><input type="checkbox" id="funcGDCIntersect"> I can find the coordinates of the points of intersection between two graphs using the GDC. </li>
  <li><input type="checkbox" id="funcGDCSolvers"> I can solve equations using (i) graphical methods, (ii) polynomial solver, and (iii) system of linear equation solver on the GDC. </li>
</ul>

</div>
<script>

function updateProgress() {

  const checkboxes = document.querySelectorAll('#skills-checklist input[type="checkbox"]');

  const total = checkboxes.length;

  const completed =
    [...checkboxes].filter(cb => cb.checked).length;

  const percentage =
    Math.round((completed / total) * 100);

  document.getElementById("progress-text")
    .textContent = percentage + "%";

  document.getElementById("progress-bar")
    .value = percentage;
}

document.querySelectorAll('#skills-checklist input[type="checkbox"]').forEach(cb => {

  cb.checked = localStorage.getItem(cb.id) === 'true';

  cb.addEventListener('change', () => {

    localStorage.setItem(cb.id, cb.checked);

    updateProgress();

  });

});

updateProgress();

</script>

<!--
UNTIL HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->