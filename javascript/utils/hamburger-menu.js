const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click', () => {
  showUpHamburger();
})

function showUpHamburger() {
  const navigation = document.getElementById('navigation');
  if(!navigation.classList.contains('show')) {
    navigation.classList.add('show');
  } else {
    navigation.classList.remove('show');
  }
  

}