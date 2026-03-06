import { getGuests } from "./database.js";

const guests = getGuests();

export const employeesList = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li
                    data-id="${guest.id}"
                    data-type="guest"
                    data-name="${guest.name}"
                    >${guest.name}
                </li>`
    }

    html += "</ul>"

    return html
}