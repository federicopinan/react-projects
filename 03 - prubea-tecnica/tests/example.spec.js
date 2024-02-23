// @ts-check
import {test, expect} from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({page}) => {
    //** SE DIRIGE HACÍA LA PÁGINA DE LOCALHOST
    await page.goto(LOCALHOST_URL)

    //** AGARRA EL ROL DE TEXTO(FACT) Y LA IMAGEN(IMAGEN DE GATO)

    const text = await page.getByRole('paragraph')
    const image = await page.getByRole('img')

    //** AGARRA EL CONTENIDO DE CADA ROL
    const textContent = await text.textContent()
    const imageSrc = await image.getAttribute('src')

    //** VERIFICA  QUE EL TEXTO SEA UNA FACT VÁLIDA
    await expect(textContent?.length).toBeGreaterThan(0)
    await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
