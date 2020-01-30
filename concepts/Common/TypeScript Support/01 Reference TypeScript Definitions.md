You can find the file with TypeScript definitions for DevExtreme in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 20.1\DevExtreme\Sources\Lib\ts** by default. Add this file to your project. Then, reference this and jQuery TypeScript definition file in your *.ts*-file.

    /// <reference path="TypeScript/jquery.d.ts" />
    //  File from the zip archive or from the installation folder...
    /// <reference path="TypeScript/dx.all.d.ts" />
    //  ...or file from GitHub
    /// <reference path="TypeScript/devextreme.d.ts" />

You can also reference TypeScript definitions for Knockout or AngularJS.

    /// <reference path="TypeScript/knockout.d.ts" />
    /// <reference path="TypeScript/angular.d.ts" />

Along with TypeScript definitions, you need to reference the libraries themselves. See [Installation](/Documentation/Guide/Getting_Started/Installation/) for detailed information.


#####See Also#####
- [Configure a Widget Using TypeScript](/Documentation/Guide/Getting_Started/TypeScript_Support/Configure_a_Widget)

[tags]typescript support, typescript definitions