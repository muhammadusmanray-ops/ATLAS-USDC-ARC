const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    const liveUrl = 'https://huggingface.co/spaces/HEWJDEWJDBQWJDWEJ/ATLASusdc';
    console.log(`Navigating to ${liveUrl}...`);
    await page.goto(liveUrl);
    await page.waitForTimeout(5000); // Wait for page to load fully
    
    // Hugging Face spaces use an iframe. Try to find the iframe first.
    const iframeLoc = page.frameLocator('iframe').first();

    console.log("Switching to Ledger Tab...");
    // Try in iframe first, otherwise try in main page
    let tabButton;
    try {
      tabButton = iframeLoc.locator('button:has-text("DECENTRALIZED LEDGER")');
      await tabButton.click({ timeout: 5000 });
    } catch {
      tabButton = page.locator('button:has-text("DECENTRALIZED LEDGER")');
      await tabButton.click();
    }
    
    await page.waitForTimeout(2000);

    console.log("Finding a transaction link...");
    let link;
    try {
      link = iframeLoc.locator('table a').first();
      await link.waitFor({ state: 'visible', timeout: 5000 });
    } catch {
      link = page.locator('table a').first();
      await link.waitFor({ state: 'visible' });
    }
    
    const href = await link.getAttribute('href');
    console.log(`Found link: ${href}`);

    console.log("Clicking the link...");
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      link.click(),
    ]);

    await newPage.waitForLoadState();
    console.log(`Successfully opened new tab with URL: ${newPage.url()}`);

  } catch (err) {
    console.error("TEST FAILED:", err.message);
  } finally {
    await browser.close();
  }
})();
