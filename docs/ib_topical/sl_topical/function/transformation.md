<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->

# Functions - Transformations of Graphs

[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcTranslations"> I can (i) describe in words, (ii) sketch the graph, (iii) find the new equation of the graph obtained when \(y=f(x)\) undergoes the transformations \(y=f(x)+k\) and \(y=f(x+k)\).</li>
  <li><input type="checkbox" id="funcScaling"> I can (i) describe in words, (ii) sketch the graph, (iii) find the new equation of the graph obtained when \(y=f(x)\) undergoes the transformations \(y=pf(x)\) and \(y=f(qx)\), where \(p,\;q>0\).</li>
  <li><input type="checkbox" id="funcReflection"> I can (i) describe in words, (ii) sketch the graph, (iii) find the new equation of the graph obtained when \(y=f(x)\) undergoes the transformations \(y=-f(x)\) and \(y=f(-x)\).</li>
  <li><input type="checkbox" id="funcCompositeTransformations"> I can solve problems involving a sequence of transformations.</li>
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

