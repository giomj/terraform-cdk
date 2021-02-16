/**
 * Testing interaction with Terraform Cloud
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

// Since chalk auto-detects the capabilities, colored output is
// deactivated by default in non-tty environments. We had an issue
// in the past, where this turned out to be a problem

describe("test with colors", () => {
  let driver: TestDriver;

  test("build providers", () => {
    driver = new TestDriver(__dirname, { FORCE_COLOR: '1' })
    driver.switchToTempDir()
    driver.init('typescript')
  })
})