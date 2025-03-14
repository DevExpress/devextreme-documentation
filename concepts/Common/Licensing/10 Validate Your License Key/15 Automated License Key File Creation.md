You may need to use your license key in multiple places (your projects and CI systems). In such cases, you can store your DevExtreme license key in an environment variable. You can then read that variable's value and create necessary files on demand.  

The following code is an example of a script you can use in your projects. If the license key file does not exist, the script creates a new file and uses the `DEVEXTREME_KEY` environment variable to specify the key. 

    <!-- tab: add-devextreme-license.js -->const fs = require('fs') 
    const path = './src/devextreme-license.ts'; 
    const key = process.env.DEVEXTREME_KEY ?? ''; 

    if (key || !fs.existsSync(path)) { 
        fs.writeFileSync(path, `export const licenseKey = '${key}';`); 
    }

[note] If you do not specify the `DEVEXTREME_KEY` environment variable, the key will be empty.

You can call the `node add-devextreme-license` command to invoke the script. We recommend that you include this command in npm's `postinstall` script. In this case, every developer has an automatically created license key file after they install NPM modules.

    <!-- tab: package.json -->{ 
        "scripts": { 
            "postinstall": "node add-devextreme-license" 
        }, 
    }

Register the key within [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig') and add the `devextreme-license.ts` file path to your project's `.gitignore` file. See the previous section for details.