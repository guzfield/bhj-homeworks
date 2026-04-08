const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function showNext() {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
        cases[currentIndex].classList.add('rotator__case_active');
        
        const color = cases[currentIndex].dataset.color;
        if (color) rotator.style.color = color;
        
        const speed = cases[currentIndex].dataset.speed;
        const delay = speed ? parseInt(speed) : 1000;
        
        setTimeout(showNext, delay);
    }
    
    setTimeout(showNext, 1000);
});