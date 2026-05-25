// WhatsApp form submission
document.getElementById('inquiryForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('[name="name"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const car = document.querySelector('[name="car"]').value;
    const budget = document.querySelector('[name="budget"]').value;
    const city = document.querySelector('[name="city"]').value;
    const comment = document.querySelector('[name="comment"]').value;
    
    const message = `Здравствуйте! Хочу рассчитать автомобиль под ключ.%0A%0AИмя: ${name}%0AТелефон: ${phone}%0AАвтомобиль: ${car}%0AБюджет: ${budget}%0AГород доставки: ${city}${comment ? '%0AКомментарий: ' + comment : ''}`;
    
    window.open(`https://wa.me/79510150505?text=${message}`, '_blank');
    
    // Reset form
    document.getElementById('inquiryForm').reset();
});

function openWhatsApp(source) {
    let defaultMessage = 'Здравствуйте! Хочу рассчитать автомобиль под ключ.';
    
    if (source === 'korea') {
        defaultMessage = 'Здравствуйте! Интересуюсь автомобилями из Южной Кореи. Хочу рассчитать стоимость под ключ.';
    } else if (source === 'japan') {
        defaultMessage = 'Здравствуйте! Интересуюсь автомобилями из Японии. Хочу рассчитать стоимость под ключ.';
    } else if (source === 'china') {
        defaultMessage = 'Здравствуйте! Интересуюсь автомобилями из Китая. Хочу рассчитать стоимость под ключ.';
    }
    
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/79510150505?text=${encodedMessage}`, '_blank');
}

function openTelegram() {
    window.open('https://t.me/+79510150505', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/cars_koreaa', '_blank');
}

function openTelegramChannel() {
    window.open('https://t.me/koreya_avto_05', '_blank');
}