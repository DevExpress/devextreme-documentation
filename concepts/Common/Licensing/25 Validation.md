[note] DevExtreme’s license verification process does not impact app functionality nor affect app performance. 

When creating the first component, DevExtreme checks the license key specified in the `config()` method. If license key verification is successful, additional license-related messages are not shown within the browser console or on-screen.

If license key validation fails, DevExtreme displays warning messages in the browser console at runtime. If the `devextreme-license` CLI cannot generate a runtime key, it reports errors directly in the CLI output. For a full list of error codes and their descriptions, refer to:

[License Key for DevExpress Products — Error Code Reference](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#error-code-reference)