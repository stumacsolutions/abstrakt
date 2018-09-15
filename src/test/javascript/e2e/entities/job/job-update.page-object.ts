import { element, by, ElementFinder } from 'protractor';

export default class JobUpdatePage {
  pageTitle: ElementFinder = element(by.id('abstraktApp.job.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  weekSelect: ElementFinder = element(by.css('select#job-week'));
  completeInput: ElementFinder = element(by.css('input#job-complete'));
  paidInput: ElementFinder = element(by.css('input#job-paid'));
  customerSelect: ElementFinder = element(by.css('select#job-customer'));

  getPageTitle() {
    return this.pageTitle;
  }

  setWeekSelect(week) {
    this.weekSelect.sendKeys(week);
  }

  getWeekSelect() {
    return this.weekSelect.element(by.css('option:checked')).getText();
  }

  weekSelectLastOption() {
    this.weekSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  getCompleteInput() {
    return this.completeInput;
  }
  getPaidInput() {
    return this.paidInput;
  }
  customerSelectLastOption() {
    this.customerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  customerSelectOption(option) {
    this.customerSelect.sendKeys(option);
  }

  getCustomerSelect() {
    return this.customerSelect;
  }

  getCustomerSelectedOption() {
    return this.customerSelect.element(by.css('option:checked')).getText();
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
