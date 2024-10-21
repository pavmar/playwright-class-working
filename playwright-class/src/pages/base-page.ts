import { Page } from "@playwright/test";

export class BasePage {
  
  constructor(public page: Page) {
  }

  readonly HALF_SECOND = 500;
  readonly ONE_SECOND = 1000;
  readonly FIVE_SECONDS = 5000;
  readonly SEVEN_SECONDS = 7000;
  readonly ONE_MINUTE = 1 * 60 * 1000;
  readonly EIGHT_MINUTES = 8 * 60 * 1000;

  readonly UPLOADS_PATH = 'test-files/uploads/';
  readonly DOWNLOADS_PATH = 'test-files/downloads/';
}
