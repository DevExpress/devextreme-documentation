To add DevExtreme license verification to your CI/CD processes, run the `devextreme-license` CLI tool in a pre-build step. The tool reads your DevExpress license key from an environment variable and generates a DevExtreme-compatible runtime key file.

For full instructions, including an example for GitHub Actions and Secrets, refer to the following article:

[License Key for DevExpress Products — CI/CD Systems](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#option-3-cicd-systems)

[note] If your organization owns multiple DevExtreme licenses, you can use any valid license key issued to you or your employees for CI/CD processes. If you prefer not to tie your build servers to a specific employee key, you can purchase a dedicated license for CI, but a dedicated key is not necessary if you have purchased a license for each developer using DevExtreme.