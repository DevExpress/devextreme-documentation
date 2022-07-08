Unit testing allows you to test single features (units of the code). A unit can be a function or class. 

The example below illustrates how to create a unit test for the DataGrid UI component.

To get started, create an Angular application and [add DevExtreme](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/'). Then, add the following imports:

    <!-- tab: app.component.spec.ts -->
    // Import dependencies
    import { TestBed } from '@angular/core/testing';
    import { DxDataGridModule } from 'devextreme-angular';
    // Import the component
    import { AppComponent } from './app.component';

    <!-- tab: app.modules.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxDataGridModule } from 'devextreme-angular';

    import { AppComponent } from './app.component';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxDataGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

Reference DevExtreme style file in the `karma.conf.js`:

    <!-- tab: karma.conf.js -->
    files: [
        "node_modules/devextreme/dist/css/dx.light.css"
    ]

Add the following script to test the DataGrid configuration and the number of loaded records: 

    <!-- tab: app.component.spec.ts -->
    describe('AppComponent', () => {
    beforeEach(async () => {
        jasmine.clock().install();
        await TestBed.configureTestingModule({
        declarations: [
            AppComponent
        ],
        imports: [
            DxDataGridModule
        ]
        }).compileComponents();
    });
    afterEach( () => {
        jasmine.clock().uninstall();
    });

    it('renders DataGrid rows',  () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        jasmine.clock().tick(500); // use jasmine clock since DataGrid rendering is async
        expect(compiled.querySelectorAll('.dx-data-row').length).toEqual(4);
    });
    });

    <!-- tab: app.component.html -->
    <dx-data-grid
        id="gridContainer"
        [dataSource]="dataSource"
    >
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        title = 'my-app';
        dataSource: any = [{ id: 1, text: 'test' }, { id: 2, text: 'test' }, { id: 3, text: 'test' }, { id: 4, text: 'test' }];
    }

Run `ng test` command to see the test report.