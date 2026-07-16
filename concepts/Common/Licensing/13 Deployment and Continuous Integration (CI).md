You must have a valid license to distribute applications that use DevExtreme components. Our [End User License Agreement](https://www.devexpress.com/Support/EULAs/devextreme.xml) (EULA) lists the resources and files that can be redistributed to your application users.

To add DevExtreme license verification to your CI/CD processes, run the `devextreme-license` CLI tool in a pre-build step. The tool reads your DevExpress license key from an environment variable and generates a DevExtreme-compatible runtime key file.

For full instructions, including an example for GitHub Actions and Secrets, refer to the following article:

[License Key for DevExpress Products — CI/CD Systems](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#option-3-cicd-systems)

[note] If your organization owns multiple DevExpress license keys, you can use any valid DevExpress license key issued to you or your employees in CI/CD processes. The CI/CD process uses that DevExpress license key from the environment variable, and the `devextreme-license` CLI generates the runtime key file separately. If you prefer not to associate build servers with a specific employee key, you can purchase a dedicated CI license. However, a dedicated key is not required if you have purchased a license for each developer who uses DevExtreme.