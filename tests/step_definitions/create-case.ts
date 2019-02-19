import { $, browser } from 'protractor';
import { LoginPage, LocationPage, AdminHomePage, OfficerDashboardPage,
    CasesPage, CasesDashboardPage } from '../../src/page';
const { Given, When, Then } = require('cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const loginPage: LoginPage = new LoginPage();
const locationPage: LocationPage = new LocationPage();
const adminHomePage: AdminHomePage = new AdminHomePage();
const officerDashboardPage: OfficerDashboardPage = new OfficerDashboardPage();
const casesDashboardPage: CasesDashboardPage = new CasesDashboardPage();
const casesPage: CasesPage = new CasesPage();

Given(/^I selected a location$/, async () => {
  await locationPage.selectLocation();
});

When(/^I type "(.*?)" as username and  "(.*?)" as password$/, async (user, password) => {
  await browser.sleep(1000);
  await loginPage.fillUsername(user);
  await loginPage.fillPassword(password);

});

When(/^I click the Sign In button$/, async () => {
  await loginPage.signIn();
});

When(/^I click on "(.*?)"$/, { timeout: 2 * 5000 }, async (dashboard) => {
  await browser.sleep(7000);
  switch (dashboard) {
    case 'officer-dashboard': await adminHomePage.goToOfficerDashboard(); break;
    case 'cases-dashboard': await officerDashboardPage.goToCasesDashboard(); break;
  }
});

When(/^I create a new case$/, { timeout: 4 * 5000 }, async () => {
  await browser.sleep(1000);
  await casesDashboardPage.createCase();
});

When(/^I open the case$/, { timeout: 2 * 5000 }, async () => {
  await browser.sleep(1000);
  await casesDashboardPage.openCase();
});

Then(/^the "(.*?)" was saved successfully$/, { timeout: 2 * 5000 }, async (element) => {
  await browser.sleep(1000);
  switch (element) {
    case 'case-name': await expect(casesPage.getCaseName()).to.eventually
    .equal(casesDashboardPage.getCaseName()); break;
    case 'description':
      await expect(casesPage.getDescription()).to.eventually.
    equal('This is a description for this case');
      break;
    case 'event': await expect(casesPage.getEvent()).to.eventually.equal('Default Event'); break;
    case 'OfficerID':
      await expect(casesPage.getOfficerID()).to.eventually.equal('Carlos Vibanco'); break;
    case 'PartnerID': await expect(casesPage.getPartnerID()).to.eventually
    .equal('Officer, 1111'); break;
  }
});
