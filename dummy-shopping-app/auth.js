// This is a dummy authentication module for the shopping app
export function getCurrentUser() {
    return {
    id: 1,
    name:'Alice'
    };
}
//error function
export function getUserRole(user) {
    return user.profile.role;
}