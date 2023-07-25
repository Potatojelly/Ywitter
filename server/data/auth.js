let users = [
    {
        id: "1",
        username: "bob",
        password: "$2b$12$Kb9GrYW9IBCY2sE2JeH52e6xfVnFMlHjBTQWC04uRxXtmdpgTp.zG",
        name: "Bob",
        email: "bob@gmail.com",
        url:"",
    },
];

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function createUser(user) {
    const created = {...user, id: Date.now().toString()};
    users.push(created);
    return created.id;
}
