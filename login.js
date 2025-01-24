// JavaScript to toggle the drawer
const drawer = document.getElementById('drawer');
const toggleButton = document.getElementById('drawerToggle');

toggleButton.addEventListener('click', () => {
  drawer.classList.toggle('open');
  toggleButton.textContent = drawer.classList.contains('open') ? '✖' : '☰';
});

   
function theme() {
    var element = document.body;
    var Icon = document.getElementById('bx bxs-moon');
    element.classList.toggle("darkmode");
    Icon.classList.toggle('bx bxs-sun')

    
 }

    