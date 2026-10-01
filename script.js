const vectors = document.querySelectorAll(".vector");

document.addEventListener("mousemove", (event) => {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) / centerX;
    const moveY = (mouseY - centerY) / centerY;

    vectors.forEach((vector, index) => {

        const intensity = (index + 1) * 8;

        const x = moveX * intensity;
        const y = moveY * intensity;

        const rotation = 45 + (moveX * 5);

        vector.style.transform =
            `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    });

});