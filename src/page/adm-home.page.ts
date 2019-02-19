import { $, ElementFinder } from 'protractor';

export class AdminHomePage {
  private officerDashboardBox: ElementFinder;

  constructor () {
    // tslint:disable-next-line:max-line-length
    this.officerDashboardBox = $('.ad-pn-32 a span');
  }

  public async goToOfficerDashboard(): Promise<void> {
    await this.officerDashboardBox.click();
  }

}
