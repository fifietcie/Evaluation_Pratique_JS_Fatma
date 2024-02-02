export function initMenu(menuContent) {
  const categoriesElement = document.querySelector('.categories');
  if (!categoriesElement) return;

  const navElement = document.querySelector('.numnav');
  const menuContainer = document.createElement('ul');
  menuContainer.className = 'menu-container';

  menuContent.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `<img src="${item.imgSrc}" alt="${item.text}"><span>${item.text}</span>`;

    const subMenu = document.createElement('ul');
    subMenu.className = 'sub-menu';
    
    item.subMenu.forEach(subItem => {
      const subMenuItem = document.createElement('li');
      subMenuItem.className = 'sub-menu-list'
      subMenuItem.innerHTML = `<li>${subItem.text}</li>`;
      subMenu.appendChild(subMenuItem);
    });

    menuItem.appendChild(subMenu);
    menuItem.addEventListener('click', function(event) {
      event.stopPropagation();
    
      const isSubMenuVisible = subMenu.style.display === 'block';
   
      closeAllSubMenus();
     
      if (!isSubMenuVisible) {
        subMenu.style.display = 'block';
      }
    });

    menuContainer.appendChild(menuItem);
  });

  navElement.appendChild(menuContainer);

  categoriesElement.addEventListener('click', function(event) {
    event.stopPropagation();
    const isMenuVisible = menuContainer.style.display === 'block';
    closeAllSubMenus();
    menuContainer.style.display = isMenuVisible ? 'none' : 'block';
  });


  document.addEventListener('click', function() {
    menuContainer.style.display = 'none';
    closeAllSubMenus();
  });

  function closeAllSubMenus() {
    document.querySelectorAll('.sub-menu').forEach(subMenu => {
      subMenu.style.display = 'none';
    });
  }
}
