const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = data => {
    const buddyContainer = document.getElementById('buddies');
    const buddies = data.results;
    for (const buddy of buddies) {

        const div = document.createElement('div');
        div.innerText = `
        name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}
        `;
        buddyContainer.appendChild(div);

        console.log(buddy.name)
    }
}