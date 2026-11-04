[note] DevExtreme’s license verification process does not impact app functionality nor affect app performance. 

When creating the first component, DevExtreme checks the license key specified in the `config()` method. If license key verification is successful, additional license-related messages are not shown within the browser console or on-screen.

If license key validation fails, DevExtreme displays [warning and error messages](/Documentation/ApiReference/Common/utils/Errors_and_Warnings/) in the browser console at runtime. For instance, if your 30-day trial period has expired, the console displays the [E0124](/Documentation/ApiReference/Common/utils/Errors_and_Warnings/#E0124) error. If the `devextreme-license` CLI cannot generate a runtime key, it reports errors directly in the CLI output. For a full list of error codes and their descriptions, refer to:

[License Key for DevExpress Products — Error Code Reference](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#error-code-reference)