### Table of Contents

- [Evaluation (Trial)](/concepts/Common/Licensing/05%20Evaluation%20(Trial).md '/Documentation/Guide/Common/Licensing/#Evaluation_Trial')

- [Obtain Your License Key](/concepts/Common/Licensing/09%20Obtain%20Your%20License%20Key.md '/Documentation/Guide/Common/Licensing/#Obtain_Your_License_Key')

- [Validate Your License Key](/concepts/Common/Licensing/10%20Validate%20Your%20License%20Key/00%20Validate%20Your%20License%20Key.md '/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key')

- [Deployment and Continuous Integration (CI)](/concepts/Common/Licensing/13%20Deployment%20and%20Continuous%20Integration%20(CI).md '/Documentation/Guide/Common/Licensing/#Deployment_and_Continuous_Integration_CI')

- [Updating License Keys](/concepts/Common/Licensing/15%20Updating%20License%20Keys.md '/Documentation/Guide/Common/Licensing/#Updating_License_Keys')

- [Information Security](/concepts/Common/Licensing/20%20Information%20Security.md '/Documentation/Guide/Common/Licensing/#Information_Security')

- [Validation](/concepts/Common/Licensing/25%20Validation.md '/Documentation/Guide/Common/Licensing/#Validation')

- [Redistribution](/concepts/Common/Licensing/27%20Redistribution.md '/Documentation/Guide/Common/Licensing/#Redistribution')

---

You must purchase a license to use DevExtreme UI components/libraries within a software project. If you are ready to incorporate DevExtreme UI components/libraries in your project, please visit the [DevExtreme Purchase](https://js.devexpress.com/Buy/) page for pricing options.

[note] For more information on product licensing and the terms that govern use of DevExtreme UI component/libraries, visit the following webpage: [DevExtreme Licensing](https://js.devexpress.com/Licensing/).

Please remember that Developer Express Inc licenses DevExtreme on a per developer basis. Each developer using DevExtreme must purchase/acquire a license. If your organization owns multiple licenses, you can assign individual licenses to different developers. By assigning available licenses to developers within your organization, each developer will have access to their own personal license key within the DevExpress Download Manager (under their personal DevExpress account).

If a developer leaves or stops using DevExtreme, you can revoke their license and re-assign it to another individual.

### v23.2+

With the release of v23.2, DevExpress checks the license status to determine whether a valid DevExtreme license exists. If you do not have a valid DevExtreme license, an error message is displayed on-screen. To complete the license verification process, you must [supply a valid license key](/concepts/Common/Licensing/10%20Validate%20Your%20License%20Key/00%20Validate%20Your%20License%20Key.md '/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key').

The process involves two steps:

1. Obtain your DevExpress license key from the [Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/) and register it on your machine.
2. Use the `devextreme-license` CLI tool to generate a DevExtreme-compatible runtime key and register it in your application.

[note]

Regardless of the distribution channel you use — NuGet, npm, yarn, CDN — you must complete both steps above.

[/note]

For complete setup instructions, refer to: [License Key for DevExpress Products](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#manual-registration-additional-step-for-jsts-developers-devextreme)

Should you require purchase assistance or more information on our license verification process, please contact a member of the <a href="mailto:clientservices@devexpress.com">DevExpress Client Services Team</a>.