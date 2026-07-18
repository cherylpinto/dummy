import { getCurrentUser } from "./auth.js";
import { getUppercaseName } from "./userService.js";

export function renderDashboard() {
    const user = getCurrentUser();

    const displayName = getUppercaseName(user);

    console.log(`Welcome ${displayName}`);
}