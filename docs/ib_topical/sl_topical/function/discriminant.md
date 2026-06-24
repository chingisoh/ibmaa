<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - Quadratic Equations and Nature of Roots

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcQuadFactor"> I can solve a quadratic equation by factorisation.</li>
  <li><input type="checkbox" id="funcQuadFormula"> I can solve a quadratic equation using the quadratic formula.</li>
  <li><input type="checkbox" id="funcQuadCompleteSq"> I can solve a quadratic equation by completing the square.</li>
  <li><input type="checkbox" id="funcQuadNatureOfRoots"> I can use the discriminant to determine the nature of roots of a given quadratic equation.</li>
  <li><input type="checkbox" id="funcQuadNatureOfRoots"> I can deduce the possible values of the discriminant based on the nature of roots of a given quadratic equation.</li>
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


