const names = ["Petya", "Vanya", "Anton", "Andrey", "Lena"]

function getRandomName() {
    let idx = Math.floor((Math.random() * 10) % 5)
    return names[idx]

}

export { getRandomName }