const database = {
    areas: [
        {
            id: 3,
            name: "Lodge"
        }, 
        {
            id: 2,
            name: "Lost Wolf Hiking"
        }, 
        {
            id: 1,
            name: "Chamfort River"
        }, 
        {
            id: 4,
            name: "Gander River"
        }, 
        {
            id: 5,
            name: "Campgrounds"
        }, 
        {
            id: 6,
            name: "Pine Bluffs Trails"
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        }, 
        {
            id: 2,
            name: "Canoeing"
        }, 
        {
            id: 3,
            name: "Fishing"
        }, 
        {
            id: 4,
            name: "Hiking"
        }, 
        {
            id: 5,
            name: "Picnicking"
        }, 
        {
            id: 6,
            name: "Rock Climbing"
        },
        {
            id: 7,
            name: "Lodging"
        }, 
        {
            id: 8,
            name: "Parking"
        }, 
        {
            id: 9,
            name: "Information"
        }, 
        {
            id: 10,
            name: "Food Vendors"
        }, 
        {
            id: 11,
            name: "Zip-lines"
        }
    ],
    areaServices: [
        {
            id: 1,
            areaId: 1,
            serviceId: 1
        }, 
        {
            id: 2,
            areaId: 1,
            serviceId: 2
        }, 
        {
            id: 3,
            areaId: 1,
            serviceId: 3
        }, 
        {
            id: 4,
            areaId: 2,
            serviceId: 4
        }, 
        {
            id: 5,
            areaId: 2,
            serviceId: 5
        }, 
        {
            id: 6,
            areaId: 2,
            serviceId: 6
        },
        {
            id: 7,
            areaId: 3,
            serviceId: 7
        }, 
        {
            id: 8,
            areaId: 3,
            serviceId: 8
        }, 
        {
            id: 9,
            areaId: 3,
            serviceId: 9
        }, 
        {
            id: 10,
            areaId: 3,
            serviceId: 5
        }, 
        {
            id: 11,
            areaId: 4,
            serviceId: 3
        }, 
        {
            id: 12,
            areaId: 4,
            serviceId: 4
        }, 
        {
            id: 13,
            areaId: 5,
            serviceId: 9
        }, 
        {
            id: 14,
            areaId: 5,
            serviceId: 7
        }, 
        {
            id: 15,
            areaId: 5,
            serviceId: 8
        }, 
        {
            id: 16,
            areaId: 6,
            serviceId: 10
        }, 
        {
            id: 17,
            areaId: 6,
            serviceId: 4
        }, 
        {
            id: 18,
            areaId: 6,
            serviceId: 5
        }, 
        {
            id: 19,
            areaId: 6,
            serviceId: 11
        }
    ],
    guests: [
        {
            id: 1,
            areaId: 1,
            name: "Spock"
        }, 
        {
            id: 2,
            areaId: 1,
            name: "James T. Kirk"
        }, 
        {
            id: 3,
            areaId: 1,
            name: "Nyota Uhura"
        }, 
        {
            id: 4,
            areaId: 2,
            name: "Christopher Pike"
        }, 
        {
            id: 5,
            areaId: 2,
            name: "Pavel Chekov"
        }, 
        {
            id: 6,
            areaId: 2,
            name: "Scotty James"
        },
        {
            id: 7,
            areaId: 3,
            name: "Leonard McCoy"
        }, 
        {
            id: 8,
            areaId: 3,
            name: "Hikaru Sulu"
        }, 
        {
            id: 9,
            areaId: 3,
            name: "Jean-Luc Picard"
        }, 
        {
            id: 10,
            areaId: 3,
            name: "Worf"
        }, 
        {
            id: 11,
            areaId: 4,
            name: "Data"
        }, 
        {
            id: 12,
            areaId: 4,
            name: "William T. Riker"
        }, 
        {
            id: 13,
            areaId: 5,
            name: "Geordi LaForge"
        }, 
        {
            id: 14,
            areaId: 5,
            name: "Deanna Troi"
        }, 
        {
            id: 15,
            areaId: 5,
            name: "Beverly Crusher"
        }, 
        {
            id: 16,
            areaId: 6,
            name: "The Q"
        }, 
        {
            id: 17,
            areaId: 6,
            name: "Miles O'Brien"
        }, 
        {
            id: 18,
            areaId: 1,
            name: "Lore"
        }, 
        {
            id: 19,
            areaId: 1,
            name: "Anakin Skywalker"
        }, 
        {
            id: 20,
            areaId: 1,
            name: "Padmé Amidala"
        }, 
        {
            id: 21,
            areaId: 6,
            name: "Luke Skywalker"
        }, 
        {
            id: 22,
            areaId: 6,
            name: "Leia Organa"
        }, 
        {
            id: 23,
            areaId: 6,
            name: "Han Solo"
        }, 
        {
            id: 24,
            areaId: 6,
            name: "Chewbacca"
        }, 
        {
            id: 25,
            areaId: 2,
            name: "Obi-Wan Kenobi"
        }, 
        {
            id: 26,
            areaId: 2,
            name: "R2-D2"
        }, 
        {
            id: 27,
            areaId: 2,
            name: "C-3PO"
        }, 
        {
            id: 28,
            areaId: 2,
            name: "Yoda"
        }, 
        {
            id: 29,
            areaId: 4,
            name: "Ahsoka Tano"
        }, 
        {
            id: 30,
            areaId: 4,
            name: "Darth Maul"
        }
    ]
}

export const getAreas = () => {
    return structuredClone(database.areas);
}

export const getServices = () => {
    return structuredClone(database.services);
}

export const getGuests = () => {
    return structuredClone(database.guests);
}

export const getAreaServices = () => {
    return structuredClone(database.areaServices);
}