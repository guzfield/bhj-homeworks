const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    
    value.addEventListener('click', (event) => {
        event.stopPropagation();
        list.classList.toggle('dropdown__list_active');
    });
    
    const items = dropdown.querySelectorAll('.dropdown__item');
    
    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        
        link.addEventListener('click', (event) => {
            event.preventDefault();
            value.textContent = link.textContent;
            list.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
        const list = dropdown.querySelector('.dropdown__list');
        list.classList.remove('dropdown__list_active');
    });
});