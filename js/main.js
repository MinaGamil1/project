;(function () {
  var PHONE_WA = '201553053626';

  // ارسال الفورم كرسالة واتساب
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = String(fd.get('name') || '').trim();
      var phone = String(fd.get('phone') || '').trim();
      var message = String(fd.get('message') || '').trim();

      var text =
        'طلب نقل عفش داخل جدة%0A' +
        (name ? 'الاسم: ' + encodeURIComponent(name) + '%0A' : '') +
        (phone ? 'رقم العميل: ' + encodeURIComponent(phone) + '%0A' : '') +
        (message ? 'التفاصيل: ' + encodeURIComponent(message) : '');

      window.open('https://wa.me/' + PHONE_WA + '?text=' + text, '_blank', 'noopener');
    });
  }

  // فتح/غلق قائمة الموبايل
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

