DevExtreme Angular allows you to configure UI component settings using configuration components. These start with the `dxo` and `dxi` prefixes. DevExtreme includes two types of configuration components:

- **Named configuration components**    
    Components such as `dxo-data-grid-popup` are specific to their parent UI components. The name of the parent UI component is included after the `dxo` or `dxi` prefix.
- **Generic configuration components**    
    You can use components such as `dxo-popup` to configure any supported UI component.

We recommend using named configuration components that are specific to the UI component you need to configure. Named configuration components are strictly typed in TypeScript and contain only properties related to their parent UI components.

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-editing mode="popup" />
        <dxo-data-grid-popup>
            <dxi-data-grid-toolbar-item
                widget="dxButton"
                location="after"
                [options]="{
                    text: 'Refresh',
                    onClick: refresh
                }">
            </dxi-data-grid-toolbar-item>
        </dxo-data-grid-popup>
    </dx-data-grid>

[tags] angular