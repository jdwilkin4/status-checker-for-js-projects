import { test } from "@playwright/test";

test("Go to RPG game page", async ({ page }) => {
  await page.goto("https://fcc-js-project-status-checker.netlify.app/");
  await page
    .getByRole("link", {
      name: "Learn Basic JavaScript by Building a Role Playing Game",
    })
    .click();
  await page.getByRole("link", { name: "Return Home" }).click();
});

test("View Certification Sample", async ({ page }) => {
  await page.goto("https://fcc-js-project-status-checker.netlify.app/");
  await page.getByRole("link", { name: "Palindrome Checker" }).click();
  await page.getByRole("link", { name: "View Sample" }).click();
});

test("View User stories", async ({ page }) => {
  await page.goto("https://fcc-js-project-status-checker.netlify.app/");
  await page.getByRole("link", { name: "Palindrome Checker" }).click();
  await page.getByRole("link", { name: "View User Stories" }).click();
});
