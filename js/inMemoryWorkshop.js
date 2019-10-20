inMemoryWorkshop = []


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop))
    })
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        inMemoryWorkshop.push({
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) { 
    return new Promise((resolve, reject) => {
        resolve(inMemoryWorkshop = inMemoryWorkshop.filter(function(o) { return o.name != name; }))
        })
}

function updateWorkshop(name) {
    return new Promise((resolve, reject) => {
        const update = inMemoryWorkshop.find(workshop => workshop.name === name)
        update.name = newWorkshop.name
        update.description = newWorkshop.description
        resolve()
    })
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}