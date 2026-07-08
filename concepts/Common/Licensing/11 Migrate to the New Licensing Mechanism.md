DevExtreme v26.2 introduces a new licensing mechanism. Follow the steps below to migrate your application from an earlier version.

Applications that already follow the setup described in [Validate Your License Key](/concepts/Common/Licensing/10%20Validate%20Your%20License%20Key.md '/Documentation/Guide/Common/Licensing/#Validate_Your_License_Key') do not require application code changes.

### Step 1: Register Your DevExpress License Key

Register your DevExpress license key on your machine using one of the methods described in [License Key for DevExpress Products](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#register-your-key-basics). If you already use other DevExpress products, the key is likely already installed. Update the key as usual when you upgrade to a new major version.

### Step 2: Generate Runtime Key

The `devextreme-license` CLI reads your registered DevExpress key and generates a DevExtreme-compatible runtime key. Your application most likely already contains a file that stores this key. DevExtreme recommends the following file names and locations:

- `src/devextreme-license.ts` — for modular applications
- `src/devextreme-license.js` — for non-modular (`<script>`-based) applications

The runtime key file is typically excluded from version control using `.gitignore`.

##### Modular Applications

Add the following script to your `package.json` to automatically regenerate the runtime key file each build (update the `--out` path/extension to match your runtime key file):

    {
      "scripts": {
        "prebuild": "devextreme-license --out src/devextreme-license.ts --force"
      }
    }

The resulting file fully matches the format we [recommend](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#option-1-modular-apps-angular-react-vue) in the documentation, but contains the key in the new format.

##### jQuery / Non-Modular Applications

Run `devextreme-license` with the `--non-modular` flag:

    devextreme-license --non-modular --out src/devextreme-license.js --force

The resulting file fully matches the format we [recommend](https://docs.devexpress.com/GeneralInformation/405494/trial-register/set-up-your-dev-express-license-key#option-2-non-modular-applications-jquery-cdn-based) in the documentation, but contains the key in the new format.

Verify that the generated file is included using a `<script>` tag:

    <script src="./src/devextreme-license.js" type="text/javascript"></script>

### Step 3: Verify Your Application

In most cases, no application code changes are required. Verify that the runtime key is read from the correct file in the location where you pass it to [DevExpress.config(GlobalConfig)](/api-reference/50%20Common/utils/config().md '/Documentation/ApiReference/Common/Utils/#config').

If you previously used your license key from a custom file, use the `--out` parameter to specify a custom file path, or run `devextreme-license` without parameters (it outputs the key directly to the CLI).

### Step 4: Configure CI/CD

For CI/CD environments, the `prebuild` script added in Step 2 is sufficient on the build side, but you must also set your DevExpress license key in an environment variable on the build server. For complete instructions, see [Deployment and Continuous Integration (CI)](/concepts/Common/Licensing/13%20Deployment%20and%20Continuous%20Integration%20(CI).md '/Documentation/Guide/Common/Licensing/#Deployment_and_Continuous_Integration_CI').
