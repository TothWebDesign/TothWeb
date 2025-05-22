const topicDesign = document.getElementById('text-design');
const topicAccessibility = document.getElementById('text-accessibility');
const topicTechnology = document.getElementById('text-technology');

const boxDesign = document.getElementById('box-design');
const boxAccessibility = document.getElementById('box-accessibility')
const boxTechnology = document.getElementById('box-technology')

function showText(topic, box){
  if (topic.style.display === "none") {
    topic.style.display = "block";
    box.style.background = "#222";
  } else {
    topic.style.display = "none";
    box.style.background = "#fff";
  }
}

showText(topicDesign, boxDesign);
showText(topicAccessibility, boxTechnology);
showText(topicTechnology, boxAccessibility);

