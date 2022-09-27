const toggleAllAsRead = document.getElementById('toggle-unread');
toggleAllAsRead.addEventListener('click', () => {
  const notificationsNumber = document.getElementById('notifications-number');
  notificationsNumber.innerHTML = '0';
  const newNotifications = document.querySelectorAll('.notification.new');
  newNotifications.forEach((notificaion) => {
    notificaion.classList.remove('new');
  });
});
