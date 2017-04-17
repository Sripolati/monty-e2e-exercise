require('chai').should();
var expect = require('chai').expect;

export const hasTopsProducts = () => {
  browser.isVisible(".ProductList-products")
}

/**
 * Select the search filter
 *
 * @return {Promise}
 */
export const filterProductList = () => {
  browser.element(".Button.Filters-refineButton").click();
  return browser.waitForVisible(".Refinements-content.is-shown").should.be.true;
}

/**
 * Select the filterName such as "Colour", "Size",...etc
 * @param {String} filterName
 */
export const filterBy = (filterName) => {
      browser.element('.Refinements.is-shown div.AccordionGroup.RefinementList > article:nth-child(1)').click();
      //ToDo------we need to create dynamic css where we can pass filternames such as "Colour", "Size", "Fit"
      // browser.element("//div[@class='RefinementList-accordionHeader']/span[text()='Colour']").click();

  }

/**
 * Choose the color from the filter
 * @param {String} colourName
 */
export const chooseColor = (colourName) => {
  browser.element("div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(1)").click()
//ToDo -------we need to create dynamic css where we can pass color names such as "black", "blue", "brown"
//   browser.element('.RefinementOptions .ValueOption-label > span:contains("${colourName}")').click()
}

/**
 * Apply the filter after selections
 * @return {Promise}
 */
export const applyFilter = () => {
  browser.element(".Refinements-applyButton").click();
}

/**
 * Check the total filters in the Filter
 * @param expectedNoOfFilters
 */
export const totalFilters = (expectedNoOfFilters) => {
  browser.waitForVisible('.Filters-refineButton',1000);
  let getFilterNo = browser.element(".Filters-refineButton").getText();
  const [, actualNoOfFilters, index, input] = getFilterNo.match("\\((.*?)\\)");
  console.log('actualNoOfFilters: ', actualNoOfFilters);
  actualNoOfFilters.should.be.equals(expectedNoOfFilters);

}

/**
 * Verifying the search results
 */
export const verifyResults = () => {
  browser.waitForVisible('.ProductList-products',1000);
  let products = browser.elements(".ProductList-products .Product");
  let totalProducts = products.value.length;
  console.log('totalProducts: ', totalProducts);
  expect(totalProducts).to.be.above(0);

}

/**
 * Remove the search filters
 * @return {Promise}
 */
export const removeFilters = () => {
  browser.element('.Refinements-clearButton').click();

}
