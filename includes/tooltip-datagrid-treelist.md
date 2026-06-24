The [cellHintEnabled](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#cellHintEnabled) property adds a native browser tooltip to truncated cell content automatically. If you use a custom [cellTemplate](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#cellTemplate), you need to add the `title` attribute manually:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: dataSource,
            columns: [{
                dataField: "name",
                caption: "Name"
            }, {
                dataField: "description",
                caption: "Description",
                cellTemplate: function(container, options) {
                    $("<div>")
                        .text(options.value)
                        .attr("title", options.value)
                        .appendTo(container);
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [dataSource]="dataSource">
        <dxi-{widget-name}-column dataField="name" caption="Name"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column
            dataField="description"
            caption="Description"
            cellTemplate="descriptionTemplate">
        </dxi-{widget-name}-column>
        <div *dxTemplate="let cell of 'descriptionTemplate'" [title]="cell.value">
            {{ cell.value }}
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module } from "devextreme-angular";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module]
    })
    export class AppComponent {
        dataSource = [ /* ... */ ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="dataSource">
            <DxColumn data-field="name" caption="Name" />
            <DxColumn
                data-field="description"
                caption="Description"
                cell-template="descriptionTemplate"
            />
            <template #descriptionTemplate="{ data: cell }">
                <div :title="cell.value">{{ cell.value }}</div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    const dataSource = [ /* ... */ ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    const dataSource = [ /* ... */ ];

    function DescriptionCell({ data }: { data: { value: string } }) {
        return <div title={data.value}>{data.value}</div>;
    }

    export default function App() {
        return (
            <{WidgetName} dataSource={dataSource}>
                <Column dataField="name" caption="Name" />
                <Column
                    dataField="description"
                    caption="Description"
                    cellRender={(data) => <DescriptionCell data={data} />}
                />
            </{WidgetName}>
        );
    }

---

To add tooltips to multiple columns without modifying each cell template, use the [onCellPrepared](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#onCellPrepared) event:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: dataSource,
            columns: ["name", "description"],
            onCellPrepared: function(e) {
                if (e.rowType === "data") {
                    $(e.cellElement).attr("title", e.value);
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [dataSource]="dataSource"
        (onCellPrepared)="onCellPrepared($event)">
        <dxi-{widget-name}-column dataField="name" caption="Name"></dxi-{widget-name}-column>
        <dxi-{widget-name}-column dataField="description" caption="Description"></dxi-{widget-name}-column>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module } from "devextreme-angular";
    import { CellPreparedEvent } from "devextreme/ui/{widget-name}";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module]
    })
    export class AppComponent {
        dataSource = [ /* ... */ ];

        onCellPrepared(e: CellPreparedEvent) {
            if (e.rowType === "data") {
                (e.cellElement as HTMLElement).title = e.value;
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            :data-source="dataSource"
            @cell-prepared="onCellPrepared">
            <DxColumn data-field="name" caption="Name" />
            <DxColumn data-field="description" caption="Description" />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';
    import type { CellPreparedEvent } from 'devextreme/ui/{widget-name}';

    const dataSource = [ /* ... */ ];

    function onCellPrepared(e: CellPreparedEvent) {
        if (e.rowType === 'data') {
            (e.cellElement as HTMLElement).title = e.value;
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';
    import type { CellPreparedEvent } from 'devextreme/ui/{widget-name}';

    const dataSource = [ /* ... */ ];

    export default function App() {
        const onCellPrepared = useCallback((e: CellPreparedEvent) => {
            if (e.rowType === 'data') {
                (e.cellElement as HTMLElement).title = e.value;
            }
        }, []);

        return (
            <{WidgetName} dataSource={dataSource} onCellPrepared={onCellPrepared}>
                <Column dataField="name" caption="Name" />
                <Column dataField="description" caption="Description" />
            </{WidgetName}>
        );
    }

---

To display a styled [Tooltip](/Documentation/ApiReference/UI_Components/dxTooltip/) with custom content, initialize the Tooltip component inside `cellTemplate`:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: dataSource,
            columns: [{
                dataField: "description",
                caption: "Description",
                cellTemplate: function(container, options) {
                    const cellEl = $("<span>")
                        .text(options.value)
                        .appendTo(container);

                    $("<div>").dxTooltip({
                        target: cellEl,
                        showEvent: "mouseenter",
                        hideEvent: "mouseleave",
                        contentTemplate: function() {
                            return options.value;
                        }
                    }).appendTo(container);
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [dataSource]="dataSource">
        <dxi-{widget-name}-column
            dataField="description"
            caption="Description"
            cellTemplate="descriptionTemplate">
        </dxi-{widget-name}-column>
        <div *dxTemplate="let cell of 'descriptionTemplate'">
            <span [id]="'cell_' + cell.rowIndex">{{ cell.value }}</span>
            <dx-tooltip
                [target]="'#cell_' + cell.rowIndex"
                showEvent="mouseenter"
                hideEvent="mouseleave">
                <div *dxTemplate="let t of 'content'">{{ cell.value }}</div>
            </dx-tooltip>
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Dx{WidgetName}Module, DxTooltipModule } from "devextreme-angular";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        standalone: true,
        imports: [Dx{WidgetName}Module, DxTooltipModule]
    })
    export class AppComponent {
        dataSource = [ /* ... */ ];
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :data-source="dataSource">
            <DxColumn
                data-field="description"
                caption="Description"
                cell-template="descriptionTemplate"
            />
            <template #descriptionTemplate="{ data: cell }">
                <div>
                    <span :id="'cell_' + cell.rowIndex">{{ cell.value }}</span>
                    <DxTooltip
                        :target="'#cell_' + cell.rowIndex"
                        show-event="mouseenter"
                        hide-event="mouseleave">
                        <template #content>{{ cell.value }}</template>
                    </DxTooltip>
                </div>
            </template>
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';
    import { DxTooltip } from 'devextreme-vue/tooltip';

    const dataSource = [ /* ... */ ];
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';
    import { Tooltip } from 'devextreme-react/tooltip';

    const dataSource = [ /* ... */ ];

    function DescriptionCell({ data }: { data: { value: string; rowIndex: number } }) {
        return (
            <div>
                <span id={`cell_${data.rowIndex}`}>{data.value}</span>
                <Tooltip
                    target={`#cell_${data.rowIndex}`}
                    showEvent="mouseenter"
                    hideEvent="mouseleave">
                    {data.value}
                </Tooltip>
            </div>
        );
    }

    export default function App() {
        return (
            <{WidgetName} dataSource={dataSource}>
                <Column
                    dataField="description"
                    caption="Description"
                    cellRender={(data) => <DescriptionCell data={data} />}
                />
            </{WidgetName}>
        );
    }

---

To add a tooltip to a header cell, use the [headerCellTemplate](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/columns/#headerCellTemplate) property as described above.

You can replace `"mouseenter"` and `"mouseleave"` with other events such as `"click"`, `"dblclick"`, `"focus"`, or `"blur"` to control when the Tooltip is displayed.
