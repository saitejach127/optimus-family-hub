document.querySelector('#newMemberModal .btn-primary').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const container = document.querySelector('.container.mt-4');
    const newCard = document.createElement('div');
    newCard.className = 'card shadow-sm mt-4 p-3';
    newCard.innerHTML = `
        <div class="d-flex align-items-center mb-3">
            <img src="./person.jpg" class="rounded-circle" width="40" height="40" alt="Profile Image">
            <p class="mb-0 ms-2">${name}</p>
        </div>
        <p class="text-muted">Pending Invite</p>
    `;
    container.appendChild(newCard);
});
