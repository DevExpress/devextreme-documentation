---
##### jQuery

Create a new file in the folder where you store your project sources. For example, `src/devextreme-license.ts`. Paste the license key you copied from the Download Manager:

    <!-- tab: devextreme-license.ts -->export const licenseKey = 'DEVELOPER_LICENSE_KEY’;

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.ts

This action also ensures that your team does not commit the key by accident.

Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'). This should be done in the entry point of the application:

    <!--JavaScript-->import config from 'devextreme/core/config'; 
    import { licenseKey } from './devextreme-license'; 
    
    config({ licenseKey });   

##### Angular

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.ts`. Paste the license key you copied from the Download Manager:

    <!-- tab: devextreme-license.ts -->export const licenseKey = 'DEVELOPER_LICENSE_KEY’;

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.ts

This action also ensures that your team does not commit the key by accident.

Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'). This should be done in the entry point of the application:

    <!--JavaScript-->import config from 'devextreme/core/config'; 
    import { licenseKey } from './devextreme-license'; 
    
    config({ licenseKey });   

##### Vue

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.ts`. Paste the license key you copied from the Download Manager:

    <!-- tab: devextreme-license.ts -->export const licenseKey = 'DEVELOPER_LICENSE_KEY’;

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.ts

This action also ensures that your team does not commit the key by accident.

Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'). This should be done in the entry point of the application:

    <!--JavaScript-->import config from 'devextreme/core/config'; 
    import { licenseKey } from './devextreme-license'; 
    
    config({ licenseKey });   

##### React

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.ts`. Paste the license key you copied from the Download Manager:

    <!-- tab: devextreme-license.ts -->export const licenseKey = 'DEVELOPER_LICENSE_KEY’;

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.ts

This action also ensures that your team does not commit the key by accident.

Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'). This should be done in the entry point of the application:

    <!--JavaScript-->import config from 'devextreme/core/config'; 
    import { licenseKey } from './devextreme-license'; 
    
    config({ licenseKey });   

---