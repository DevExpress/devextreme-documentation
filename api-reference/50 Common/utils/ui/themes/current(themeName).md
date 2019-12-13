---
id: ui.themes.current(themeName)
---
---
##### shortDescription
Sets a theme with a specific name.

##### param(themeName): String
The theme's name.

---
The theme name passed as a parameter should be the value of the **data-theme** attribute used within the **rel="dx-theme"** links to the theme. For instance, if you have links to two of your themes...

    <!--HTML--><link rel="dx-theme" data-theme="generic.mytheme-dark" href="css/mytheme-dark.css" data-active="true">
    <link rel="dx-theme" data-theme="generic.mytheme-light" href="css/mytheme-light.css" data-active="false">

... you can switch between them as shown in the code below. Note that you should specify a callback function that repaints all widgets after the theme has been loaded using the [ready(callback)](/api-reference/50%20Common/utils/ui/themes/ready(callback).md '/Documentation/ApiReference/Common/utils/ui/themes/#readycallback') method.

---
##### jQuery  

    <!--JavaScript-->DevExpress.ui.themes.ready(function () {
        $("#dataGridContainer").dxDataGrid("repaint");
        // Call other widgets' repaint() method here
    });
    DevExpress.ui.themes.current('mytheme-light');
    // DevExpress.ui.themes.current('mytheme-dark');

##### Angular

    <!--TypeScript-->
    import themes from "devextreme/ui/themes";
    import { Component, ViewChild } from "@angular/core";
    import { DxDataGridComponent, DxButtonComponent } from "devextreme-angular";
    
    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid [dataSource]="dataSource"></dx-data-grid>
            <dx-button text="Change Theme" (onClick)="changeTheme()"></dx-button>
        `
    })
    
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent
        @ViewChild(DxButtonComponent, { static: false }) button: DxButtonComponent
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        // @ViewChild(DxButtonComponent) button: DxButtonComponent

        changeTheme() {
            themes.ready(() => {
                this.dataGrid.instance.repaint();
                this.button.instance.repaint();
            });
            themes.current('mytheme-light');
            // themes.current('mytheme-dark');
        }
    }

---

Refer to the [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') article for details on the themes that are supplied with DevExtreme.