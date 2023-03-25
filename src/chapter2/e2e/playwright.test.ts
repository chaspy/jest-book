import { Browser, chromium, firefox, webkit } from "playwright";

describe.each([
  { browserType: chromium, browserName: "chromium" },
  { browserType: firefox, browserName: "firefox" },
  { browserType: webkit, browserName: "webkit" },
])("e2e test with playwright and $browserName", ({ browserType }) => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await browserType.launch(); // ブラウザの起動
    // 実際にブラウザの挙動を見たい場合はheadlessモードを無効化する //
    browser = await browserType.launch({ headless: false });
  });

  afterAll(async () => {
    await browser.close(); //ブラウザの終了
  });

  it("a search keyword will be on the page title in google.com", async () => {
    // 新しいページを立ち上げる
    const page = await browser.newPage();
    await page.goto("https://www.google.com/ncr");
    // 検索ボックスの要素を探し、playwrightを入力しエンターキーをクリック
    await page.type('input[name="q"]', "playwright");
    await page.keyboard.press("Enter");

    // 次のページに切り替わるまで待つ
    await page.waitForURL("https://www.google.com/search?q=playwright*", {
      timeout: 2000,
    });
    expect(await page.title()).toBe("playwright - Google Search"); // ページを終了する
    await page.close();
  });
});
