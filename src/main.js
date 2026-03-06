import { Guests } from "./guests.js"
 import { Areas } from "./areas.js"
 import { Services } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <header>
    <img src="https://bcassetcdn.com/public/blog-ms/production/sites/2/2024/05/Nature-Lawn-Garden-by-brandcrowd.png" alt="park logo" class="park__logo">
    <h1>Cider Falls</h1>
    </header>
        <article class="details">
            <section class="detail--column details__areas__grid">
                <h2 class="areas__title">Park Areas</h2>
                    <div class="detail--sentence details__services_sentence">
                    <strong>Services We Offer:</strong>${Services()}
                    </div>
                    <div class="areas__grid">
                    ${Areas()}
                    </div>
            </section>
            <section class="detail--column details__guests__column">
                <h2 class="guest__title">Park Guests</h2>
                ${Guests()}
            </section>
        </article>
    <footer> 
        <span>Phone: (443)-998-0987</span> 
        <span>Email: info@ciderfallspark.gov</span> 
        <span>Address: 4200 Cider Lane, Jackson, WY 83001</span> 
    </footer>
`

mainContainer.innerHTML = applicationHTML