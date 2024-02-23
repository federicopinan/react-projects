// ** URLS DE LAS APIS
// *Haciendo fetching de datos sin usar librerías (axios)
// Es mala práctica pasar el estado setFact como prop, de esa forma no es reutilizable
const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_FACT)
    const data = await response.json()
    const {fact} = data
    return fact
}
