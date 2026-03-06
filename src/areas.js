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

 const generateAreaHTML = () => {
    
 }