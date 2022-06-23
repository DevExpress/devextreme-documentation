Integration testing helps test a component across multiple units. Integration testing does not test unit by unit, but tests all the units as an entity.

The example below illustrates how to test the DataGrid's functionality. The test code adds a new row, saves it, and checks the results.

To get started, create an Angular application and import modules as described in the [Unit Testing](/concepts/40%20Angular%20Components/50%20Components%20Testing/10%20Unit%20Testing.md '/Documentation/Guide/Angular_Components/Components_Testing/#Unit_Testing') article.

Add the test code. This code creates the DataGrid and calls the **addRow** and **saveEditData** methods to create a new row. Timers allow you to call methods continually since all the processes are asynchronous. The final step is to check whether the DataGrid has two visible rows — an initial row and a newly created row.

    <!-- tab: app.component.spec.ts -->
    import { TestBed } from '@angular/core/testing';
    import { AppComponent } from './app.component';
    import {DxDataGridComponent, DxDataGridModule} from 'devextreme-angular';

    describe('AppComponent', () => {
    beforeEach(async () => {
        jasmine.clock().install();
        await TestBed.configureTestingModule({
        declarations: [
            AppComponent, DxDataGridComponent
        ],
        imports: [
            DxDataGridModule
        ]
        }).compileComponents();
    });
    afterEach( () => {
        jasmine.clock().uninstall();
    });

    it('renders five DataGrid rows and is not able to edit data',  () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        jasmine.clock().tick(500);
        const comp = fixture.componentInstance;
        comp.dataGrid.instance.addRow();
        jasmine.clock().tick(500);
        comp.dataGrid.instance.saveEditData();
        jasmine.clock().tick(500);
        expect(comp.dataGrid.instance.getVisibleRows().length).toEqual(5);
        expect(comp.dataGrid.instance.hasEditData()).toBe(false);
    });
    });

    <!-- tab: app.component.html -->
    <dx-data-grid
        id="gridContainer"
        [dataSource]="dataSource"
    >
        <dxo-editing mode="batch"></dxo-editing>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        title = 'my-app';
        dataSource = {key: 'id', store: [{ id: 1, text: 'test' }, { id: 2, text: 'test' }, { id: 3, text: 'test' }, { id: 4, text: 'test' }]};
    }

Run `ng test` command to see the test report.
