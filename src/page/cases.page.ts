import { $, $$, ElementFinder } from 'protractor';

export class CasesPage {
  private officerID: ElementFinder;
  private partnerID: ElementFinder;
  private caseName: ElementFinder;
  private event: ElementFinder;
  private description: ElementFinder;

  constructor () {
    this.caseName = $$('.line').get(1);
    this.description = $$('.line').get(3);
    this.event = $$('.line').get(5);
    this.officerID = $$('.line').get(9);
    this.partnerID = $$('.line').get(11);
  }

  public getCaseName() {
    return this.caseName.getText();
  }

  public getDescription() {
    return this.description.getText();
  }

  public getEvent() {
    return this.event.getText();
  }

  public getOfficerID() {
    return this.officerID.getText();
  }

  public getPartnerID() {
    return this.partnerID.getText();
  }

}
