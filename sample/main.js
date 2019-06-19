function buttonCall() {
  const yourname = document.getElementById('yourname');
  const value = document.getElementById('yourname-value');
  value.innerText = 'Seu nome é ' + yourname.value;

  const value2 = document.createElement('div');
  value2.id = 'yourname-value2';
  value2.innerText = 'Dinamicamente seu nome é ' + yourname.value;
  setTimeout(() => {
    document.body.append(value2);
  }, 1000);
}
