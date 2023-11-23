const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click', () => {
  showUpHamburger();
})

function showUpHamburger() {
  const navigation = document.getElementById('navigation');
  if(!navigation.classList.contains('show') && navigation.classList.contains('hidden')) {
    navigation.classList.add('show');
    navigation.classList.remove('hidden');
  } else {
    navigation.classList.remove('show');
    navigation.classList.add('hidden');

  }
  

}