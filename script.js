// تحديد موعد العيد: 13 يناير 2026 الساعة 12:00 صباحاً
const targetDate = new Date("January 13, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // حساب الساعات والدقائق والثواني
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // إذا انتهى الوقت
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("title").classList.add("hidden");
        document.getElementById("celebration").classList.remove("hidden");
        
        // إطلاق القصاصات الملونة
        launchConfetti();
    }
}, 1000);

function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}