/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import CustomerComponentsPage from './customer.page-object';
import CustomerUpdatePage from './customer-update.page-object';

const expect = chai.expect;

describe('Customer e2e test', () => {
  let navBarPage: NavBarPage;
  let customerUpdatePage: CustomerUpdatePage;
  let customerComponentsPage: CustomerComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Customers', async () => {
    navBarPage.getEntityPage('customer');
    customerComponentsPage = new CustomerComponentsPage();
    expect(await customerComponentsPage.getTitle().getText()).to.match(/Customers/);
  });

  it('should load create Customer page', async () => {
    customerComponentsPage.clickOnCreateButton();
    customerUpdatePage = new CustomerUpdatePage();
    expect(await customerUpdatePage.getPageTitle().getAttribute('id')).to.match(/abstraktApp.customer.home.createOrEditLabel/);
  });

  /* it('should create and save Customers', async () => {
        customerUpdatePage.setNameInput('name');
        expect(await customerUpdatePage.getNameInput()).to.match(/name/);
        customerUpdatePage.setEmailInput('email');
        expect(await customerUpdatePage.getEmailInput()).to.match(/email/);
        customerUpdatePage.setPhoneInput('phone');
        expect(await customerUpdatePage.getPhoneInput()).to.match(/phone/);
        customerUpdatePage.frequencySelectLastOption();
        customerUpdatePage.paymentMethodSelectLastOption();
        customerUpdatePage.setFlatPositionInput('flatPosition');
        expect(await customerUpdatePage.getFlatPositionInput()).to.match(/flatPosition/);
        customerUpdatePage.setNumberInput('number');
        expect(await customerUpdatePage.getNumberInput()).to.match(/number/);
        customerUpdatePage.setStreetInput('street');
        expect(await customerUpdatePage.getStreetInput()).to.match(/street/);
        customerUpdatePage.areaSelectLastOption();
        await customerUpdatePage.save();
        expect(await customerUpdatePage.getSaveButton().isPresent()).to.be.false;
    });*/

  after(() => {
    navBarPage.autoSignOut();
  });
});
