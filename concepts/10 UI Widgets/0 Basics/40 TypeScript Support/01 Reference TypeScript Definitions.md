You can find the file with TypeScript definitions for DevExtreme in your [DevExtreme Complete](/concepts/Common/07%20DevExtreme%20Packages/30%20DevExtreme%20Complete.md '/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete') package. Add this file to your project. Then, reference this and jQuery TypeScript definition file in your *.ts*-file.

    /// <reference path="TypeScript/jquery.d.ts" />
    //  File from the package...
    /// <reference path="TypeScript/dx.all.d.ts" />
    //  ...or file from GitHub
    /// <reference path="TypeScript/devextreme.d.ts" />

You can also reference TypeScript definitions for Knockout or AngularJS.

    /// <reference path="TypeScript/knockout.d.ts" />
    /// <reference path="TypeScript/angular.d.ts" />
    /// <reference path="TypeScript/angular-sanitize.d.ts" />

Along with TypeScript definitions, you need to reference the libraries themselves. See the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/#Installation) guide for detailed information.