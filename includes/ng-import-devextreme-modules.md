DevExtreme components are [standalone](https://angular.dev/guide/components). Import them as follows:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxButtonComponent } from 'devextreme-angular/ui/button';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxButtonComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }
    
The nested components should also be imported. For example, the following code snippet imports DataGrid, its columns, sorting, and a template.

[note] If you use `*dxTemplate`, import `DxTemplateDirective`.

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxTemplateDirective } from 'devextreme-angular';
    import { DxDataGridComponent, DxiDataGridColumnComponent } from 'devextreme-angular/ui/data-grid';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxDataGridComponent, DxiDataGridColumnComponent, DxTemplateDirective],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }

    <!-- tab: app.component.html -->
    <dx-data-grid>
        <dxo-data-grid-sorting mode="none"></dxo-data-grid-sorting>
        <dxi-data-grid-column dataField="date"></dxi-data-grid-column>
        <dxi-data-grid-column 
            caption="Employee"
            cellTemplate="employeeTemplate"
        ></dxi-data-grid-column>
        <div *dxTemplate="let data of 'employeeTemplate'">
            <img
                [src]="data.value"
                alt="Picture of {{ data.data.FirstName }} {{ data.data.LastName }}"
            />
        </div>
    </dx-data-grid>

Modules facilitate working with multiple configuration components. You can import them as follows:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxDataGridModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }
    
If you use `NgModule`, import the DevExtreme modules as demonstrated in the following code snippet. If [tree shaking](/concepts/40%20Angular%20Components/40%20Common%20Features/10%20Tree%20Shaking.md '/Documentation/Guide/Angular_Components/Common_Features/Tree_Shaking/') is configured in your application, import the modules from `devextreme-angular`. If not, import them from files.
    
    <!-- tab: app.module.ts -->
    // ...
    import { DxButtonModule } from 'devextreme-angular';
    // or if tree shaking is not configured
    // import { DxButtonModule } from 'devextreme-angular/ui/button';

    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })
    export class AppModule { }

Now you can use the DevExtreme UI component in your application:

    <!-- tab: app.component.html -->
    <dx-button
        text="Click me"
        (onClick)="helloWorld()">
    </dx-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        helloWorld() {
            alert('Hello world!');
        }
    }
