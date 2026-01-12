const targetDate = new Date("January 13, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("title").classList.add("hidden");
        document.getElementById("celebration").classList.remove("hidden");
        
        launchConfetti();
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

}, 1000);

function launchConfetti() {
    var end = Date.now() + (5 * 1000); // يستمر الاحتفال لمدة 5 ثوانٍ

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#e91e63', '#9c27b0', '#ffeb3b']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#e91e63', '#9c27b0', '#ffeb3b']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
