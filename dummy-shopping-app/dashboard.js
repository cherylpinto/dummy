import { getCurrentUser } from "./auth.js";
import { getUppercaseName } from "./userService.js";

export function renderDashboard() {
    console.log("Loading dashboard...");

    const user = getCurrentUser();

    const displayName = getUppercaseName(user);

    console.log(`Welcome ${displayName}`);
}