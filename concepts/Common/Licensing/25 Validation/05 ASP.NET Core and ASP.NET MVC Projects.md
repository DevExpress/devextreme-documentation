If you use ASP.NET Core or ASP.NET MVC with DevExtreme and see a trial version message at the top of the application window, see the following solutions:

**1. .NET key is invalid or missing:**

- [DX1000, DX1001, or DX1002 errors](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#dx1000) appear in your IDE when building.
- Trial message links open `docs.devexpress.com`.
- **Solution**: follow this guide: [Remove the Trial Version Message](https://docs.devexpress.com/GeneralInformation/403732/trial-register/remove-the-this-is-a-trial-version-splash-window).

**2. .NET key is valid, but the trial message remains (issue in DevExtreme code):**

- A [DevExtreme warning](/Documentation/Guide/Common/Licensing/#Validation) appears in the browser console.
- Trial message links open `js.devexpress.com`. The message lists "**DevExtreme Complete**" in the subscription.
- **Solutions**:
  - If both Razor and jQuery/JavaScript are used, render Razor-based components first.
  - [Configure the license key manually](/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key/Manual_Configuration/Non-Modular). In `devextreme-license.js`, add `DevExpress.config({ licenseKey: 'your_license_key' });`. Load scripts in this order:
    1. jQuery scripts
    2. `dx.all.js`
    3. `devextreme-license.js`
    4. Scripts with DevExtreme components
  - Use Razor syntax instead of jQuery or JavaScript.

[note] Future releases may discontinue the proprietary DevExtreme licensing mechanism. The transition to the .NET DevExpress license key will apply to all products.

[tags] jquery