---
id: dxFileManager.Options.itemView.details
type: Object
---
---
##### shortDescription
Configures the "Details" file system representation mode.

---

![DevExtreme File Manager - Columns](/images/FileManager/details-columns.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            itemView: {
                details: {
                    columns: [
                        "thumbnail", "name",
                        // ...
                    ]
                }
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager>
        <dxo-item-view>
            <dxo-details>
                <dxi-column dataField="thumbnail"></dxi-column>
                <dxi-column dataField="name"></dxi-column>
                <!-- ... -->
            </dxo-details>
        </dxo-item-view>
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>
            <DxItemView>
                <DxDetails>
                    <DxColumn data-field="thumbnail"/>
                    <DxColumn data-field="name"/>
                    <!-- ... -->
                </DxDetails>
            </DxItemView>        
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxItemView,
            DxDetails,
            DxColumn
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxItemView,
                DxDetails,
                DxColumn
            },
            data() {
                return {
                    //...
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { ItemView, Details, Column } from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager>
                    <ItemView>
                        <Details>
                            <Column dataField="thumbnail" />
                            <Column dataField="name" />
                            <!-- ... -->
                        </Details>
                    </ItemView>
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ItemView(itemView => {
            itemView.Details(details => {
                details.Columns(columns => {
                    columns.Add().DataField("thumbnail");
                    columns.Add().DataField("name");
                    <!-- ... -->
                });
            })
        })
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ItemView(itemView => {
            itemView.Details(details => {
                details.Columns(columns => {
                    columns.Add().DataField("thumbnail");
                    columns.Add().DataField("name");
                    <!-- ... -->
                });
            })
        })
    )

---
