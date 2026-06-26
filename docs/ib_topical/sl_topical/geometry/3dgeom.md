# Geometry - Radians and Circular Measure

<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->


[Back to <b> Geometry and Trigonometry </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="geomRadians"> I can find convert a given angle between degrees and radians.</li>
  <li><input type="checkbox" id="geomArcLength"> I can find the length of an arc.</li>
  <li><input type="checkbox" id="geomSectorArea"> I can find the area of a sector.</li>
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
