<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - Linear Functions and Graphs

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcGrad"> I can find the gradient of a line using (i) its equation, and (ii) two points on the line.</li>
  <li><input type="checkbox" id="funcParallelLine"> I can state the relationship between the gradients of a pair of parallel lines.</li>
  <li><input type="checkbox" id="funcPerpLine"> I can state the relationship between the gradients of a pair of perpendicular lines.</li>
  <li><input type="checkbox" id="funcLinEqn"> I can find the equation of a straight line in <b> gradient-intercept form </b> \((y=mx+c)\), <b> general form </b> \((ax+by+c=0)\), and <b> point-slope form </b> \((y-y_1=m(x-x_1)\).</li>
  <li><input type="checkbox" id="funcPerpBisect"> I can find the equation of the perpendicular bisector of a line segment.</li>
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

## Introduction



