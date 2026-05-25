const WA_PHONE = '79510150505';
const TG_CHANNEL = 'https://t.me/koreya_avto_05';

function sendToWhatsApp(text) {
  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
}

function openWhatsApp(source = 'site') {
  const labels = {
    korea: 'автомобиль из Южной Кореи 🇰🇷',
    japan: 'автомобиль из Японии 🇯🇵',
    china: 'автомобиль из Китая 🇨🇳',
    pricing: 'расчёт стоимости под ключ',
    form: 'автомобиль под ключ'
  };
  const subject = labels[source] || 'автомобиль под ключ';
  sendToWhatsApp(`Здравствуйте! Хочу рассчитать ${subject}.`);
}

function openTelegram() {
  window.open(TG_CHANNEL, '_blank');
}

function openInstagram() {
  window.open('https://www.instagram.com/cars_koreaa', '_blank');
}

function openTelegramChannel() {
  window.open(TG_CHANNEL, '_blank');
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-whatsapp]');
  if (trigger) openWhatsApp(trigger.dataset.whatsapp);
});

document.getElementById('inquiryForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const message = [
    'Здравствуйте! Хочу рассчитать автомобиль под ключ.',
    '',
    `Имя: ${data.name || ''}`,
    `Телефон: ${data.phone || ''}`,
    `Автомобиль: ${data.car || ''}`,
    `Бюджет: ${data.budget || ''}`,
    `Город доставки: ${data.city || ''}`,
    data.comment ? `Комментарий: ${data.comment}` : ''
  ].filter(Boolean).join('\n');
  sendToWhatsApp(message);
  event.currentTarget.reset();
});
