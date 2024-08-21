---
##### jQuery

Common types are located in the following namespaces:

- DevExpress.common

- DevExpress.common.charts

- DevExpress.common.grids

<!-- ... -->

    const toolbarItemsLocation: DevExpress.common.ToolbarItemLocation;

##### Angular

If you need the same type for multiple components, you can import that type from the `common` module:

    <!-- tab: app.component.ts -->
    // In the sample below, ValidationRule is imported for each component:

    import { Component } from '@angular/core';
    import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
    import { DxFormTypes } from 'devextreme-angular/ui/form';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        dataGridValidationRule: DxDataGridTypes.ValidationRule;
        formValidationRule: DxFormTypes.ValidationRule;
    }
    
    // In the sample below, ValidationRule is imported from the common module:

    import { Component } from '@angular/core';
    import { ValidationRule } from 'devextreme/common';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        dataGridValidationRule: ValidationRule;
        formValidationRule: ValidationRule;
    }

##### Vue

If you need the same type for multiple components, you can also import this type from `common` module:

    <!-- tab: App.vue -->
    // In the sample below, ValidationRule is imported for each component:

    import { DxDataGridTypes } from 'devextreme-vue/data-grid';
    import { DxFormTypes } from 'devextreme-vue/form';

    const dataGridValidationRule: DxDataGridTypes.ValidationRule;
    const formValidationRule: DxFormTypes.ValidationRule;
    
    // In the sample below, ValidationRule is imported from the common module:

    import { ValidationRule } from 'devextreme-vue/common';

    const dataGridValidationRule: ValidationRule;
    const formValidationRule: ValidationRule;

##### React

If you need the same type for multiple components, you can import that type from the `common` module.

When using a type for multiple components, it can be unclear from which module to import:

    import { DataGrid, DataGridTypes } from 'devextreme-react/data-grid';
    import { Popup, PopupTypes } from 'devextreme-react/pop-up';

    const toolbarItemsLocation: DataGridTypes.ToolbarItemLocation = 'center';
    // or
    const toolbarItemsLocation: PopupTypes.ToolbarItemLocation = 'center';

In such cases, import the type from a common module:

    import { ToolbarItemLocation } from 'devextreme-react/common';
    const toolbarItemsLocation: ToolbarItemLocation;

Alternatively, define a union:

    type ToolbarItemLocation = DataGridTypes.ToolbarItemLocation | PopupTypes.ToolbarItemLocation;
    const toolbarItemsLocation: ToolbarItemLocation = 'center';

---