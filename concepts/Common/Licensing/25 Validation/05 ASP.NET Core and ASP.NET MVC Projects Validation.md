If you use ASP.NET Core or ASP.NET MVC with DevExtreme and see a trial version message at the top of the application window, follow this troubleshooting guide: [Remove the Trial Version Message](https://docs.devexpress.com/GeneralInformation/403732/trial-register/remove-the-this-is-a-trial-version-splash-window).

If the guide does not resolve the issue and the message remains, the problem may be related to the DevExtreme code. You need to enter a DevExtreme license key in the following cases:

- A DevExtreme warning appears in the browser console.
- DevExtreme components use jQuery or JavaScript.
- The trial message mentions "**DevExtreme** Complete" in the subscription list.

To resolve the issue:

- If you use both Razor and jQuery/JavaScript, render all Razor-based components before jQuery/JavaScript components. [Manually enter](/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key/Manual_Configuration/Non-Modular) your license key with `DevExpress.config()` and load scripts in the following order:
    1. jQuery scripts
    2. `dx.all.js`
    3. `devextreme-license.js`
    4. Scripts with DevExtreme components
- Use Razor syntax instead of jQuery or JavaScript. 

[tags] jquery