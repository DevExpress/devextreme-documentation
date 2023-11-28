To obtain a license key, you must navigate to the DevExpress [Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/) and select DevExtreme Subscription from your licensed product list. Follow on-screen instructions to copy your key.

![DevExtreme Download Manager](/images/Common/licensing-key@2x.png)

When multiple developers work on the project, each of them has their own personal license key, which they must specify for every machine they work on.

### Manual Configuration (Simplest Case)

After you copy the key from Download Manager, create a file in which the license key will be stored.

For example, the sources in your project are located under `src` folder. You can place the key in the `src/devextreme-license.ts` file. Create the file and paste the license key you copied from Download Manager:

    <!-- tab: devextreme-license.ts -->export const licenseKey = 'DEVELOPER_LICENSE_KEY’;

In order for each developer to use their own license key, the file should not be stored in the source code repository. Therefore, it is important to instruct Git to ignore the file that holds the key. To do this, you need to add the file path to your project's .gitignore file:

    <!-- tab: .gitignore -->src/devextreme-key.ts

This action also prevents your team from accidentally committing the key.

DevExtreme license key must be entered within [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'). This should be done in the entry point of the application:

    <!--JavaScript-->import config from 'devextreme/core/config'; 
    import { licenseKey } from './devextreme-license'; 
    
    config({ licenseKey });   

If your project does not use bundlers and includes sources via script tags, you can add a reference to a file holding the license key registration: 

    <!--JavaScript--><script src="./dx.all.js" type="text/javascript"> </script> 
    <script src="./devextreme-key.js" type="text/javascript"></script>

    <!-- tab: devextreme-key.js --> DevExpress.config({ licenseKey: '' });

### Automated License Key File Creation

Instead of manually creating the `devextreme-license.ts` file to store the license key, you can use a script that will automatically generate the file. The following code is an example of what such a script might look like:

    <!--JavaScript-->const fs = require('fs') 
    const path = './src/devextreme-license.ts'; 
    const key = process.env.DEVEXTREME_KEY ?? ''; 

    if (key || !fs.existsSync(path)) { 
        fs.writeFileSync(path, `export const licenseKey = '${key}';`); 
    }

As shown above, if the `src/devextreme-license.ts` file is absent, the script creates it and assigns the value of the `DEVEXTREME_KEY` environment variable as the key enable value. Utilizing the `DEVEXTREME_KEY` variable is beneficial in CI; however, if you wish to use it locally, ensure that you initialize it with the license key value before executing the script.

You can call the `node add-devextreme-license` command to invoke the script manually, but it proves more useful to include its invocation in npm's `postinstall` script:

    <!-- tab: package.json -->{ 
        "scripts": { 
            "postinstall": "node add-devextreme-license" 
        }, 
    }

In this case, upon installing the NPM modules, each developer will receive an automatically created file to store the license key.

Next, enter the key within [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig') as described in the previous section.

### CI Licensing

Use the `add-devextreme-license.js` script (as described in the previous section) to organize a license key check on CI. Set the `DEVEXTREME_KEY` environment variable on the remote machine.

In this topic, we consider the use of GitHub Actions and GitHub Secrets. A similar approach can be adopted for any other CI server.

1. Install GitHub repository-level secrets according to the [GitHub guide](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

2. Use secrets to set a job-level environment variable:

        <!-- tab: yaml -->jobs: 
            publishing: 
                env: 
                    DEVEXTREME_KEY: ${{ secrets.DevExtremeKey }} 