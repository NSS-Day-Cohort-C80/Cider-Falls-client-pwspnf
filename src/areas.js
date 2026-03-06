import { getAreas, getServices, getAreaServices } from "./database.js"

const areas = getAreas()
const serviceArray = getServices()
const areaServiceArray = getAreaServices()

const findServicesMatch = (area, areaServiceArray, serviceArray) => {
    let services = []

    for (const areaService of areaServiceArray) {
        for (const service of serviceArray) {
            if (service.id === areaService.serviceId && areaService.areaId === area.id) {
                services.push(service)
            }
        }
    }
    return services
}

 export const generateAreaHTML = () => {
    let areasHTML = ""

    for (const area of areas) {
        const areaServices= findServicesMatch(area, areaServiceArray, serviceArray)
        const serviceName = areaServices.map((service) => {
            return `<li class="service__list">${service.name}</li>`
        }).join("")
        
        areasHTML += `<h3 data-areaid="${area.id}" class="area__name">${area.name}</h3>
        <ul>
        ${serviceName}
        </ul>`
    }
    return areasHTML
 }
