export const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'servicioCorreo';
  const templateID = 'template_wmn0bam';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Submit';
      alert('El mensaje se ha enviado correctamente');
    },
    (err) => {
      btn.value = 'submit';
      alert(JSON.stringify(err));
    }
  );
});
