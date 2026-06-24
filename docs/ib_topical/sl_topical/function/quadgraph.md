<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - Quadratic Functions and Graphs

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcQuadVertex"> I can determine the vertex of a given quadratic function.</li>
  <li><input type="checkbox" id="funcQuadAxisSymm"> I can determine the axis of symmetry of a given quadratic function.</li>
  <li><input type="checkbox" id="funcAxialIntQuad"> I can find the axial intercepts of a given quadratic function.</li>
  <li><input type="checkbox" id="funcQuadConcavity"> I can determine the concavity of a given quadratic function.</li>
  <li><input type="checkbox" id="funcQuadSketch"> I can sketch the graph of a given quadratic function, from the forms \(y=ax^2+bx+c\), \(y=a(x-h)^2+k\) and \(y=a(x-p)(x-q)\).</li>
  <li><input type="checkbox" id="funcQuadDeduceEqn"> I can find the equation of a quadratic function based on a sketch of its graph.</li>

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


