function setUser(user) {
    console.log("SetUser Action =>", user);
    return {
        type: "SET_USER",
        data: user
    };
};

function removeUser() {
    console.log("RemoveUser Action");
    return {
        type: "REMOVE_USER"
    };
};

export {
    setUser,
    removeUser
};