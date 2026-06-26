# Functions - Linear Functions and Graphs

<!--
COPY THIS CHUNK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-->


[Back to <b> Functions and Graphs </b>](index.md)

<div style="margin-bottom:10px;">
  Progress:
  <span id="progress-text">0%</span>
</div>

<progress id="progress-bar" value="0" max="100" style="width:100%;"></progress>

<h3>Skill Checklist</h3>

<div id="skills-checklist">

<ul>
  <li><input type="checkbox" id="funcDist2DCoordGeom"> I can find the length of a line segment \(\mathrm {AB}\), given the coordinates of point \(\mathrm A \) and point \(\mathrm B\).</li>
  <li><input type="checkbox" id="funcMidpoint2DCcoorGeom"> I can find the coordinates of the midpoint of a line segment \(\mathrm {AB}\), given the coordinates of point \(\mathrm A \) and point \(\mathrm B\).</li>
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

## 1. Distance between Two Points

Suppose we are given the points \(A\;(x_1,\;y_1)\) and \(B\;(x_2,\;y_2)\), as shown in the diagram below.

<img src="../images/Distance.jpg" style="max-width:400px;">

From Pythagoras' Theorem, we can see that \(AB^2=a^2+b^2\).

Since \(a^2=(x_1-x_2)^2\), and \(b^2=(y_1-y_2)^2\), we can then obtain the formula as given below.

!!! note "From the Formulae Book (Topic 3 Prior Learning)"
    Distance between two points \((x_1,\;y_1)\) and \((x_2,\;y_2)\)
    
    $$ \sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$$


## 2. Midpoint of a Line Segment

Given two numbers, \(a\) and \(b\), the number that is exactly halfway between them can be found by taking their average.

For example, the number that is halfway between \(-2\) and \(5\) is \(\dfrac{-2+5}{2}\), which is \(\dfrac32\).



## 3. Linear Functions

The graph of a linear function looks like a straight line. In the graph below, when \(x\) increases by 1 unit, \(y\) always increases by the same amount. Here is an example of a linear function.

<img src="../images/linGraph.jpg" style="max-width:400px;"> 

The graph below shows an example of a function that is not linear.

<img src="../images/expGraph.jpg" style="max-width:400px;"> 

<div class="question">

  <p>Which of the following are linear functions? <br>

  \(y=1-x,\quad y=\dfrac{1}{2x+1},\quad y=2x^2-1\)    
  </p>

  <button class="ib-button"
          onclick="toggleSolution('sol1', this)">
    Show Solution
  </button>

  <div id="sol1" class="solution" style="display:none;">
    Only \(y=1-x\) is a linear function. You should be able to visualise all 3 graphs even without a GDC.
  </div>

</div>

!!! tip "Think!"

    <p> In which of the following scenarios would a linear function be a good model for the relationship between \(x\) and \(y\)? Are there any assumptions that we need to make for the model to be appropriate? </p>

    1. The time that John spent walking \((x)\) and the total distance that he covered \((y)\) <br>

    2. The amount of time that a car is parked in a shopping mall \((x)\) and the total parking charges for the car \((y)\) <br>

    3. The age of a child \((x)\) and the height of the child \((y)\) <br>


## 4. Gradients of Line Segments

The <b> gradient </b> of a line is a measure of how steep it is. 

A line can have a gradient that is positive, negative, zero or undefined.

<img src="../images/Gradients.jpg" style="max-width:600px;"> 

!!! note "From the Formulae Book (2.1)"
    Gradient formula

    $$ m = \dfrac{y_2-y_1}{x_2-x_1}$$

    <p> In this case, \((x_1,\;y_1)\) and \((x_2,\;y_2)\) are two points on the line. </p>

<div class="question">

  <p>Calculate the gradient of the line passing through:  
  </p>
    <p> (i) \((1,\;3)\) and \((3,\;15)\); </p>
    <p> (ii) \((3,\;1)\) and \((-2,\;\frac{7}{3})\); </p>
    <p> (iii) \((2,\;4)\) and \((12,\;4)\); </p>
    <p> (iv) \((8,\;-2)\) and \((8,\;-\frac13)\). </p>


  <button class="ib-button"
          onclick="toggleSolution('sol2', this)">
    Show Solution
  </button>

  <div id="sol2" class="solution" style="display:none;">
    <p> (i) \(m=\dfrac{15-3}{3-1}=6\) </p>

    <p> (ii) \(m=\dfrac{\frac73-1}{-2-3}=-\dfrac{4}{15}\) </p>

    <p> (iii) \(m=\dfrac{4-4}{12-2}=0\) </p>

    <p> (iv) \(m=\dfrac{-\frac13-2}{8-8}\) which is undefined </p>

    You should also check that these values make sense with the help of a quick sketch.

  </div>

</div>

For a line with a gradient of \(m\), we can interpret this to mean that \(y\) changes by \(m\) when \(x\) increases by 1 unit.

<div class="question">

  <p> A car is travelling at constant speed. The distance of the car from Town A, in kilometres, is represented by \(y\) and the time in hours that the car has been moving is represented by \(x\). The linear graph below shows how \(y\) varies as \(x\) changes. </p>

  <img src="../images/Speed.jpg" style="max-width:400px;"> 

  <p> Calculate the gradient of the line and interpret its value in context. </p>


  <button class="ib-button"
          onclick="toggleSolution('sol3', this)">
    Show Solution
  </button>

  <div id="sol3" class="solution" style="display:none;">
    <p> Gradient \(= \dfrac{180-0}{0-3} = -60\) </p>

    <p> This value shows that the distance of the car from Town A is <b> decreasing </b> at 60 kilometres per hour. In other words, the car is moving at 60 km/h towards Town A.
  </div>

</div>



### 4.1 Parallel and Perpendicular Lines

## 5. Equations of Straight Lines

### 5.1 Gradient-Intercept Form

### 5.2 Point-Slope Form

### 5.3 General Form

## 6. Perpendicular Bisectors

## 7. Miscellaneous Practice Questions




