import { $, ElementFinder } from 'protractor';

export class OfficerDashboardPage {
  private casesDashboardBox: ElementFinder;

  constructor () {
    this.casesDashboardBox = $('.inline-con span');
  }

  public async goToCasesDashboard(): Promise<void> {
    await this.casesDashboardBox.click();
  }

}
