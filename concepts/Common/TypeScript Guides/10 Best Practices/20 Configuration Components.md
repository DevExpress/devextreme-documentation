DevExtreme Angular allows you to configure UI component settings using configuration components. These start with the `dxo` and `dxi` prefixes. DevExtreme includes two types of configuration components:

- **Named configuration components**    
    Components such as `dxo-data-grid-popup` are specific to their parent UI components. The name of the parent UI component is included after the `dxo` or `dxi` prefix.
- **Generic configuration components**    
    You can use components such as `dxo-popup` to configure any supported UI component.

We recommend using named configuration components that are specific to the UI component you need to configure. Named configuration components are strictly typed in TypeScript and contain only properties related to their top-level UI components.

    <!-- tab: app.component.html -->
    <!-- Stepper item example -->
    <dx-stepper ... >
        <dxi-stepper-item
            icon="docfile"
            label="Upload Supporting Files"
            [optional]="true"
        ></dxi-stepper-item>
    </dx-stepper>

    <!-- CardView editing example -->
    <dx-card-view ... >
        <dxo-card-view-editing
            [allowAdding]="true"
            [allowDeleting]="true"
            [allowUpdating]="true"
        ></dxo-card-view-editing>
    </dx-card-view>

You can implement named configuration components for nested DevExtreme components, such as the editing [Popup](/Documentation/Guide/UI_Components/Popup/Overview/) within the [DataGrid](/Documentation/Guide/UI_Components/DataGrid/Overview/). To do this, specify **top-level component** names. For instance, to configure Popup animation settings within a DataGrid, implement the `<dxo-data-grid-animation>` configuration component:

    <dx-data-grid ... >
        <dxo-editing mode="popup" />
        <dxo-data-grid-popup>
            <dxo-data-grid-animation
                [show]="showOptions"
                [hide]="hideOptions"
            ></dxo-data-grid-animation>
        </dxo-data-grid-popup>
    </dx-data-grid>

[note]

Specify Popup and [Popover](/Documentation/Guide/UI_Components/Popover/Overview/) toolbar items as `<...-toolbar-item>` (both for nested and non-nested controls), and other component toolbar items as `<...-item>`:

    <!-- Toolbar item in a DataGrid editing Popup -->
    <dx-data-grid ... >
        <dxo-editing mode="popup" />
        <dxo-data-grid-popup>
            <dxi-data-grid-toolbar-item
                widget="dxButton"
                location="after"
                [options]="buttonOptions"
            ></dxi-data-grid-toolbar-item>
        </dxo-data-grid-popup>
    </dx-data-grid>

    <!-- Toolbar item in a Scheduler -->
    <dx-scheduler ... >
        <dxo-scheduler-toolbar>
            <dxi-scheduler-item name="dateNavigator"></dxi-scheduler-item>
        </dxo-scheduler-toolbar>
    </dx-scheduler>

[/note]

[tags] angular
