import * as homepage from '../../pageObjects/homePage'
import * as topsListPage from '../../pageObjects/topsPage'

module.exports = function () {

  this.Given(/^I am viewing product list tops$/,
    function () {
      homepage.gotoTopsPage();
      topsListPage.hasTopsProducts();
    });

  this.Given(/^I filter the product list$/,
    function () {
      topsListPage.filterProductList();
    });

  this.Given(/^I filter by option "([^"]*)"$/,
    function (filterName) {
      topsListPage.filterBy(filterName);
    });

  this.Given(/^I select colour "([^"]*)"$/,
    function (colourName) {
      topsListPage.chooseColor(colourName.toLowerCase());
    });

  this.When(/^I apply these filters$/,
    function () {
      topsListPage.applyFilter();
    });

  this.Then(/^Filter button has (\d+) filter$/,
    function (noOfFilters) {
      topsListPage.totalFilters(noOfFilters);
    });

  this.Then(/^Filter button has no filters$/,
    function () {
      topsListPage.totalFilters(0);
    });

  this.Then(/^Filter returns a product list$/,
    function () {
      topsListPage.verifyResults();
    });

  this.Given(/^I clear all filters$/,
    function () {
      topsListPage.removeFilters();
    });

}