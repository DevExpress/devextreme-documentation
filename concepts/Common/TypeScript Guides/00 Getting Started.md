TypeScript definitions for DevExtreme libraries are available in the following locations:

- The [devextreme-dist](https://www.npmjs.com/package/devextreme-dist) package installed in your project:
    
        <!-- tab: Path -->
        node_modules/devextreme-dist/ts/dx.all.d.ts

- The **devextreme-dist** package hosted on a CDN:

        <!-- tab: URL -->
        https://cdn.jsdelivr.net/npm/devextreme-dist@25.2/ts/dx.all.d.ts

- Local DevExtreme sources installed using the [DevExpress Unified Component Installer](https://docs.devexpress.com/GeneralInformation/15615/installation/download-the-registered-version#download-a-registered-version):

        <!-- tab: Path -->
        C:\Program Files\DevExpress 25.2\Components\Sources\DevExtreme\Lib\ts

Reference `dx.all.d.ts` and [jQuery types](https://www.npmjs.com/package/@types/jquery) in your project:

    <!-- tab: Modular application -->
    import $ from 'jquery';
    import 'devextreme-dist/ts/dx.all';

    <!-- tab: Non-modular application -->
    /// <reference path="TypeScript/jquery.d.ts" />
    /// <reference path="TypeScript/dx.all.d.ts" />

To access specific type definitions, use the `DevExpress` namespace:

    <!-- tab: index.ts -->
    const handleDataGridInit = (e: DevExpress.ui.dxDataGrid.InitializedEvent) => { /* ... */ };

#####See Also#####
- [DevExtreme Modules Structure](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/)
- [TypeScript Guides - Scopes of Types](/Documentation/Guide/Common/TypeScript_Guides/Scopes_of_Types/)

[tags] jquery