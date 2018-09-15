/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import JobComponentsPage from './job.page-object';
import JobUpdatePage from './job-update.page-object';

const expect = chai.expect;

describe('Job e2e test', () => {
  let navBarPage: NavBarPage;
  let jobUpdatePage: JobUpdatePage;
  let jobComponentsPage: JobComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Jobs', async () => {
    navBarPage.getEntityPage('job');
    jobComponentsPage = new JobComponentsPage();
    expect(await jobComponentsPage.getTitle().getText()).to.match(/Jobs/);
  });

  it('should load create Job page', async () => {
    jobComponentsPage.clickOnCreateButton();
    jobUpdatePage = new JobUpdatePage();
    expect(await jobUpdatePage.getPageTitle().getAttribute('id')).to.match(/abstraktApp.job.home.createOrEditLabel/);
  });

  it('should create and save Jobs', async () => {
    jobUpdatePage.weekSelectLastOption();
    const selectedComplete = await jobUpdatePage.getCompleteInput().isSelected();
    if (selectedComplete) {
      jobUpdatePage.getCompleteInput().click();
      expect(await jobUpdatePage.getCompleteInput().isSelected()).to.be.false;
    } else {
      jobUpdatePage.getCompleteInput().click();
      expect(await jobUpdatePage.getCompleteInput().isSelected()).to.be.true;
    }
    const selectedPaid = await jobUpdatePage.getPaidInput().isSelected();
    if (selectedPaid) {
      jobUpdatePage.getPaidInput().click();
      expect(await jobUpdatePage.getPaidInput().isSelected()).to.be.false;
    } else {
      jobUpdatePage.getPaidInput().click();
      expect(await jobUpdatePage.getPaidInput().isSelected()).to.be.true;
    }
    jobUpdatePage.customerSelectLastOption();
    await jobUpdatePage.save();
    expect(await jobUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
