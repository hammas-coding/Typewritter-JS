const text = document.querySelector('.sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Freelancer';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Web Designer';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Frond-End Developer';
    }, 8000);
};
textLoad();
setInterval(textLoad, 12000);