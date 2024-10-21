import { HomePage } from "./home-page";
import { Page } from "@playwright/test";

export class AllPagesObject {
  homePage: HomePage;

  constructor(public page: Page) {
    this.homePage = new HomePage(page);
  }
}