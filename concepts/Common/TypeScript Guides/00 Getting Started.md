The [devextreme-dist](https://www.npmjs.com/package/devextreme-dist) package ships with TypeScript definitions in the following file:

    node_modules\devextreme-dist\ts\dx.all.d.ts

Reference `dx.all.d.ts` and [jQuery types](https://www.npmjs.com/package/@types/jquery) in your project as follows:

    <!-- tab: Non-modular application -->
    /// <reference path="TypeScript/jquery.d.ts" />
    /// <reference path="TypeScript/dx.all.d.ts" />

    <!-- tab: Modular application -->
    import $ from 'jquery';
    import 'devextreme-dist/ts/dx.all'

To access specific type definitions, use the `DevExpress` namespace:

    <!-- tab: index.ts -->
    const handleDataGridInit = (e: DevExpress.ui.dxDataGrid.InitializedEvent) => { /* ... */ };

#####See Also#####
- [DevExtreme Modules Structure](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/)
- [TypeScript Guides - Scopes of Types](/Documentation/Guide/Common/TypeScript_Guides/Scopes_of_Types/)

[tags] jquery