document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});
