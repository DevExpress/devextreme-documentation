You can find the TypeScript definition file for DevExtreme in the [DevExtreme zip archive](/Documentation/Guide/Common/Distribution_Channels/#ZIP_Archive) or in the installation folder: **C:\Program Files\DevExpress 24.1\DevExtreme\Sources\Lib\ts**. Add this file to your project. Next, reference this file and the jQuery TypeScript definition file in your *.ts* file.

    <reference path="TypeScript/jquery.d.ts" />
    //  File from the zip archive or from the installation folder:
    <reference path="TypeScript/dx.all.d.ts" />

Along with TypeScript definitions, you need to reference the libraries themselves. Refer to the following help topic for detailed information: [Local Files](/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/#Local_Files).

[tags] jquery