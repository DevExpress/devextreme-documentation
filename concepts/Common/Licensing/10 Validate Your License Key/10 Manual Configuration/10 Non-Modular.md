---
##### jQuery

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.js`. Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'):

    <!-- tab: devextreme-license.js -->DevExpress.config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.js

This action also ensures that your team does not commit the key by accident.

If your project includes sources from `<script>` tags (which do not use bundlers), add a reference to the file that registers the license key: 

    <!-- tab: index.html --><script src="./dx.all.js" type="text/javascript"> </script> 
    <script src="./devextreme-license.js" type="text/javascript"></script>

##### Angular

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.js`. Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'):

    <!-- tab: devextreme-license.js -->DevExpress.config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.js

This action also ensures that your team does not commit the key by accident.

If your project includes sources from `<script>` tags (which do not use bundlers), add a reference to the file that registers the license key:

    <!-- tab: index.html --><script src="./dx.all.js" type="text/javascript"> </script> 
    <script src="./devextreme-license.js" type="text/javascript"></script>

##### Vue

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.js`. Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'):

    <!-- tab: devextreme-license.js -->DevExpress.config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.js

This action also ensures that your team does not commit the key by accident.

If your project includes sources from `<script>` tags (which do not use bundlers), add a reference to the file that registers the license key:

    <!-- tab: index.html --><script src="./dx.all.js" type="text/javascript"> </script> 
    <script src="./devextreme-license.js" type="text/javascript"></script>

##### React

Create a new file in the folder where you store your project sources. For example, your file path may look like this: `src/devextreme-license.js`. Specify your DevExtreme license key in [GlobalConfig](/api-reference/50%20Common/Object%20Structures/GlobalConfig '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig'):

    <!-- tab: devextreme-license.js -->DevExpress.config({ licenseKey: 'DEVELOPER_LICENSE_KEY' });

To allow each developer to use their own license key, do not store this file in your repository. Instruct Git to ignore the file that holds the key. To do this, add the file path to your project's `.gitignore` file:

    <!-- tab: .gitignore -->src/devextreme-license.js

This action also ensures that your team does not commit the key by accident.

If your project includes sources from `<script>` tags (which do not use bundlers), add a reference to the file that registers the license key:

    <!-- tab: index.html --><script src="./dx.all.js" type="text/javascript"> </script> 
    <script src="./devextreme-license.js" type="text/javascript"></script>

---