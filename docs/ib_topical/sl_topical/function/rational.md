<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - Rational Functions

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcRationalVertAsymp"> I can determine the vertical asymptote of graphs given in the form \(y=\dfrac{ax+b}{cx+d}\).</li>
  <li><input type="checkbox" id="funcRationalHorAsymp"> I can determine the horizontal asymptote of graphs given in the form \(y=\dfrac{ax+b}{cx+d}\).</li>
  <li><input type="checkbox" id="funcRationalGraph"> I can sketch graphs given in the form \(y=\dfrac{ax+b}{cx+d}\).</li>
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

