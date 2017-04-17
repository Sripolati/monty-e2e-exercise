export const gotoPage = () => {
    browser.url('/')
}

/**
 * Check the logo on the home page
 */
export const hasLogo = () => {
    browser.isVisible(".BrandLogo-img")
}

/**
 * Navigate to Tops Product list page
 */
export const gotoTopsPage = () => {
    browser.isVisible(".ImageList-image[alt='Tops']")
    browser.element(".ImageList-image[alt='Tops']").click()
}
