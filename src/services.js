import { getAreas, getServices, getAreaServices} from "./database.js";

const areas = getAreas()
const services = getServices()
const areaServices = getAreaServices()

//This returns an array of objs(areas) that offer a given service. It loops through every obj in the join table array and for each one checks if the areaService.areaId matches area.id and if the areaService.serviceId matches the service.id. If both are true then the area obj gets pushed into the arrayOfAreas array.
const findServiceAreaMatch = (service, areaServicesArray, areasArray) => {
    const arrayOfAreas = []
        for (const areaService of areaServicesArray) {
            for (const area of areasArray){
                if (area.id === areaService.areaId && service.id === areaService.serviceId){
                    arrayOfAreas.push(area)
                } 
            }
        }

        return arrayOfAreas
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const serviceTarget = clickEvent.target
        
        if (serviceTarget.dataset.type === "service"){

            const serviceId = parseInt(serviceTarget.dataset.serviceid)
            const serviceName = serviceTarget.dataset.servicename
            
            for (const service of services){
                if (serviceId === service.id) {
                    const servicesInArea = findServiceAreaMatch(service, areaServices, areas)

                    const areaName = servicesInArea.map((area) => {
                    return `${area.name}`
                    }).join(" and ")

                    window.alert(`${serviceName} is available in ${areaName}`)
                }
            }
        }      
    }
)

// This is a version of the event listener using .find instead of a for loop and if statement 
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const serviceTarget = clickEvent.target
        
//         if (serviceTarget.dataset.type === "service"){

//             const serviceId = parseInt(serviceTarget.dataset.serviceid)
//             const serviceName = serviceTarget.dataset.servicename
            
//             //this returns the entire service obj whose id match that of the click event target
//             const service = services.find((service) => {
//                 return service.id === serviceId
//             })
//             const servicesInArea = findServiceAreaMatch(service, areaServices, areas)

//             const areaName = servicesInArea.map((area) => {
//                 return `${area.name}`
//             }).join(" and ")

//             window.alert(`${serviceName} is available in ${areaName}`)
//         }      
//     }
// )

export const Services = () => {
    let html = ""

    //span is an inline element used for small sentences in HTML
    const serviceHTML = services.map((service) => {
        return `
            <span data-serviceid="${service.id}" data-type="service" data-servicename="${service.name}">${service.name}</span>
        `
    }).join(", ")

    html += serviceHTML
    return html
}