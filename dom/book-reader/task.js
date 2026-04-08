const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

function removeSizeClasses() {
    book.classList.remove('book_fs-small', 'book_fs-big');
}
function setFontSize(size) {
    removeSizeClasses();
    
    if (size === 'small') {
        book.classList.add('book_fs-small');
    } else if (size === 'big') {
        book.classList.add('book_fs-big');
    }
}

fontSizes.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        fontSizes.forEach(btn => btn.classList.remove('font-size_active'));
        button.classList.add('font-size_active');  
        const size = button.dataset.size;

        if (size === 'small' || size === 'big') {
            setFontSize(size);
        } else {
            setFontSize('normal');
        }
    });
});