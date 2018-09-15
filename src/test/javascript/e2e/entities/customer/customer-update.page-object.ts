import { element, by, ElementFinder } from 'protractor';

export default class CustomerUpdatePage {
  pageTitle: ElementFinder = element(by.id('abstraktApp.customer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#customer-name'));
  emailInput: ElementFinder = element(by.css('input#customer-email'));
  phoneInput: ElementFinder = element(by.css('input#customer-phone'));
  frequencySelect: ElementFinder = element(by.css('select#customer-frequency'));
  paymentMethodSelect: ElementFinder = element(by.css('select#customer-paymentMethod'));
  flatPositionInput: ElementFinder = element(by.css('input#customer-flatPosition'));
  numberInput: ElementFinder = element(by.css('input#customer-number'));
  streetInput: ElementFinder = element(by.css('input#customer-street'));
  areaSelect: ElementFinder = element(by.css('select#customer-area'));

  getPageTitle() {
    return this.pageTitle;
  }

  setNameInput(name) {
    this.nameInput.sendKeys(name);
  }

  getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  setEmailInput(email) {
    this.emailInput.sendKeys(email);
  }

  getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  setPhoneInput(phone) {
    this.phoneInput.sendKeys(phone);
  }

  getPhoneInput() {
    return this.phoneInput.getAttribute('value');
  }

  setFrequencySelect(frequency) {
    this.frequencySelect.sendKeys(frequency);
  }

  getFrequencySelect() {
    return this.frequencySelect.element(by.css('option:checked')).getText();
  }

  frequencySelectLastOption() {
    this.frequencySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setPaymentMethodSelect(paymentMethod) {
    this.paymentMethodSelect.sendKeys(paymentMethod);
  }

  getPaymentMethodSelect() {
    return this.paymentMethodSelect.element(by.css('option:checked')).getText();
  }

  paymentMethodSelectLastOption() {
    this.paymentMethodSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  setFlatPositionInput(flatPosition) {
    this.flatPositionInput.sendKeys(flatPosition);
  }

  getFlatPositionInput() {
    return this.flatPositionInput.getAttribute('value');
  }

  setNumberInput(number) {
    this.numberInput.sendKeys(number);
  }

  getNumberInput() {
    return this.numberInput.getAttribute('value');
  }

  setStreetInput(street) {
    this.streetInput.sendKeys(street);
  }

  getStreetInput() {
    return this.streetInput.getAttribute('value');
  }

  areaSelectLastOption() {
    this.areaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  areaSelectOption(option) {
    this.areaSelect.sendKeys(option);
  }

  getAreaSelect() {
    return this.areaSelect;
  }

  getAreaSelectedOption() {
    return this.areaSelect.element(by.css('option:checked')).getText();
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
