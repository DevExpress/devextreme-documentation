End-to-End (Functional) testing ignores the component's internal structure and allows you to verify how DevExtreme components work from a user's point of view.

The example below illustrates how to create an End-to-End test for the DataGrid's functionality. The test code emulates a click on the pager.  

To get started, create an Angular application and import modules as described in the [Unit Testing](/concepts/40%20Angular%20Components/50%20Components%20Testing/10%20Unit%20Testing.md '/Documentation/Guide/Angular_Components/Components_Testing/#Unit_Testing') article.

Add the following script to your test file. This code finds the specified link on the pager and clicks it. A click on the pager triggers the `dxclick` event. The test checks whether the result page index is the same as the expected page index.

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

    it('renders DataGrid and switches its page',  () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        jasmine.clock().tick(500);
        const comp = fixture.componentInstance;
        comp.dataGrid.instance.addRow();
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        (compiled.querySelectorAll('.dx-page')[5]).dispatchEvent(event);
        jasmine.clock().tick(500);
        expect(comp.dataGrid.instance.pageIndex()).toBe(5);
    });
    });

    <!-- tab: app.component.html -->
    <dx-data-grid
        id="gridContainer"
        [dataSource]="dataSource"
    >
        <dxo-pager [visible]="true" [allowedPageSizes]="[5, 10]" [showPageSizeSelector]="true"></dxo-pager>
        <dxo-paging [enabled]="true" [pageSize]="10"></dxo-paging>
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
        array = [];
        dataSource;
        constructor() {
            for (let i = 0; i < 100; i++) {
                this.array.push({id: i, text: 'test ' + i});
            }
            this.dataSource = {key: 'id', store: this.array};
        }
    }

Run `ng test` command to see the test report.