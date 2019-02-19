import { $, $$, ElementFinder, browser, protractor, element } from 'protractor';

export class CasesDashboardPage {
  private createCaseButton: ElementFinder;
  private officerID: ElementFinder;
  private partnerID: ElementFinder;
  private caseName: ElementFinder;
  private event: ElementFinder;
  private description: ElementFinder;
  private caseNotes: ElementFinder;
  private createButton: ElementFinder;
  private caseTitle: ElementFinder;
  private randomCaseName;

  constructor () {
    const autName = 'CaseNameAUT';
    this.createCaseButton = $$('.button-primary').get(0);
    this.officerID = $$('.k-input').get(0);
    this.partnerID = $$('.k-input').get(1);
    this.event = $$('.k-input').get(2);

    this.caseName = $('#caseName');
    this.description = $('#description');
    this.caseNotes = $('#caseNotes');

    this.createButton = $$('.button-secondary').get(1);

    this.caseTitle = $$('.case-table .case-head span').get(0);

    this.randomCaseName =  autName + Math.floor(Math.random() * 10000) + 1;
  }

  private async fillOfficerID(): Promise<void> {
    await this.officerID.sendKeys('cvibanco');
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  private async fillPartnerID(): Promise<void> {
    await this.partnerID.sendKeys('1111');
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  private async fillCaseName(): Promise<void> {

    await browser.sleep(1000);
    await this.caseName.sendKeys(this.randomCaseName);
  }
  private async fillDescription(): Promise<void> {
    await browser.sleep(1000);
    await this.description.sendKeys('This is a description for this case');
  }
  private async selectEvent(): Promise<void> {
    await this.event.click();
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
  private async fillCaseNotes(): Promise<void> {
    await this.caseNotes.sendKeys('This is a note for this case');
  }

  public async openCase(): Promise<void> {
    await this.caseTitle.click();
  }

  public getCaseName() {
    return this.randomCaseName;
  }

  public async createCase(): Promise<void> {
    await this.createCaseButton.click();
    await browser.sleep(2000);
    await this.fillOfficerID();
    await this.fillPartnerID();
    await this.fillCaseName();
    await this.fillDescription();
    await this.selectEvent();
    await this.fillCaseNotes();
    await this.createButton.click();
  }

}
