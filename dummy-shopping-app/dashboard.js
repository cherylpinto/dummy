import { getCurrentUser } from "./auth.js";

export function renderDashboard() {
    const user = getCurrentUser();
    console.log(`Welcome ${user.name}`);
}