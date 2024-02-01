const text = document.getElementById('text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const spans = document.querySelectorAll('.h1 span');

for (let i = 1; i < spans.length; i++) {
    spans[i].style.transform = "rotate(" + (i * 16.5) + "deg)";
}
document.querySelector('.imgs').addEventListener('click', function() {
    this.classList.toggle('animate');
});

function startAnimation() {
    let marqueeContainer = document.querySelector('.marquee-container2');
    marqueeContainer.classList.toggle('active');
}