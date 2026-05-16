let people = [];
let colors;

function setup() {
  createCanvas(400, 300);

  colors = [
    color(150),        // gray
    color(255,255,0),  // yellow
    color(0,0,255),    // blue
    color(255,0,0)     // red
  ];

  // create a small crowd
  for (let i = 0; i < 6; i++) {
    people.push({
      x: random(width),
      y: random(height),
      c: random(colors)
    });
  }
}

function draw() {
  background(30);

  // draw people
  for (let p of people) {
    fill(p.c);
    noStroke();
    ellipse(p.x, p.y, 20);
  }

  // find closest person to mouse (Cory)
  let closest = people[0];
  let minDist = dist(mouseX, mouseY, closest.x, closest.y);

  for (let p of people) {
    let d = dist(mouseX, mouseY, p.x, p.y);
    if (d < minDist) {
      minDist = d;
      closest = p;
    }
  }

  // Cory (follows mouse)
  fill(closest.c);
  stroke(255);
  strokeWeight(2);
  ellipse(mouseX, mouseY, 30);

  // label
  noStroke();
  fill(255);
  text("Cory blends with nearby mood", 80, 20);
}