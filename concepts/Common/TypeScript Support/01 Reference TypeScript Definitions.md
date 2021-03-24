You can find the file with TypeScript definitions for DevExtreme in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 21.1\DevExtreme\Sources\Lib\ts** by default. Add this file to your project. Then, reference this and jQuery TypeScript definition file in your *.ts*-file.

    /// <reference path="TypeScript/jquery.d.ts" />
    //  File from the zip archive or from the installation folder...
    /// <reference path="TypeScript/dx.all.d.ts" />
    //  ...or file from GitHub
    /// <reference path="TypeScript/devextreme.d.ts" />

You can also reference TypeScript definitions for Knockout or AngularJS.

    /// <reference path="TypeScript/knockout.d.ts" />
    /// <reference path="TypeScript/angular.d.ts" />

Along with TypeScript definitions, you need to reference the libraries themselves. See [Local Files](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/10%20Local%20Files.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/#Local_Files') for detailed information.


#####See Also#####
- [Configure a UI component Using TypeScript](/concepts/Common/TypeScript%20Support/05%20Configure%20a%20UI%20Component.md '/Documentation/Guide/Common/TypeScript_Support/Configure_a_UI_Component/')

[tags]typescript support, typescript definitions