const sort = document.querySelector('.sorting');
const usersBox = document.querySelector('.users');
let sortType = document.querySelector('.sortType');

const renderList = (order) => {
  fetch(`http://localhost:3000/users/${order}`)
    .then((resp) => resp.json())
    .then((response) => {
      response.forEach((user) => {
        const userCard = document.createElement('div');
        const name_H3 = document.createElement('h3');
        const email_P = document.createElement('p');
        const membership_P = document.createElement('p');
        const ip_P = document.createElement('p');

        name_H3.textContent = `${user.name} ${user.surname}`;
        email_P.textContent = `Email address: ${user.email}`;

        membership_P.textContent = `Membership: ${user.membership.name}`;

        ip_P.textContent = `IP: ${user.ip}`;
        userCard.classList.add('userCard');

        userCard.append(name_H3, email_P, membership_P, ip_P);
        usersBox.append(userCard);
      });
    });
};

renderList('asc');

sort.addEventListener('click', () => {
  usersBox.textContent = '';
  if (sortType.textContent === 'ASC') {
    renderList('dsc');
    sortType.textContent = 'DSC';
  } else {
    renderList('asc');
    sortType.textContent = 'ASC';
  }
});
