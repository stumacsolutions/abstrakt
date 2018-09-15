/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import AreaComponentsPage from './area.page-object';
import AreaUpdatePage from './area-update.page-object';

const expect = chai.expect;

describe('Area e2e test', () => {
  let navBarPage: NavBarPage;
  let areaUpdatePage: AreaUpdatePage;
  let areaComponentsPage: AreaComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Areas', async () => {
    navBarPage.getEntityPage('area');
    areaComponentsPage = new AreaComponentsPage();
    expect(await areaComponentsPage.getTitle().getText()).to.match(/Areas/);
  });

  it('should load create Area page', async () => {
    areaComponentsPage.clickOnCreateButton();
    areaUpdatePage = new AreaUpdatePage();
    expect(await areaUpdatePage.getPageTitle().getAttribute('id')).to.match(/abstraktApp.area.home.createOrEditLabel/);
  });

  /* it('should create and save Areas', async () => {
        areaUpdatePage.setNameInput('name');
        expect(await areaUpdatePage.getNameInput()).to.match(/name/);
        await areaUpdatePage.save();
        expect(await areaUpdatePage.getSaveButton().isPresent()).to.be.false;
    });*/

  after(() => {
    navBarPage.autoSignOut();
  });
});
