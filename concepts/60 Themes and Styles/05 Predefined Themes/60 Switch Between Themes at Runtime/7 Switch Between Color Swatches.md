You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet" target="_blank">StyleSheet API</a> to switch between color swatches. In the following code, theme swatches are called `theme.custom-scheme.light.css` and `theme.custom-scheme.dark.css` and are placed in the same folder as `index.html`. The code uses SelectBox to implement the swatch selector. To switch between themes too, call [DevExpress.ui.themes.current(themeName)](/api-reference/50%20Common/utils/ui/themes/current(themeName).md '/Documentation/ApiReference/Common/utils/ui/themes/#currentthemeName') method in the `onValueChanged` callback.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        const themeData = ["light", "dark"];
        const themeMarker = "theme.";

        $("#themeSelector").dxSelectBox({
            dataSource: themeData,
            value: themeData[0],
            onValueChanged(e) {
                let accent = e.value;
                for (let index in document.styleSheets) {
                    let styleSheet = document.styleSheets[index],
                        href = styleSheet.href;
                    if (href) {
                        let themeMarkerPosition = href.indexOf(themeMarker);
                        let startPosition = themeMarkerPosition + themeMarker.length,
                            endPosition = href.indexOf(".css"),
                            fileNamePart = href.substring(startPosition, endPosition);
                        if (fileNamePart.includes("custom-scheme")) {
                            styleSheet.disabled = !(
                                accent === fileNamePart.substring(fileNamePart.indexOf('.')+1)
                            );
                        }
                    }
                }
            },
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        themeData = ["light", "dark"];
        themeMarker = "theme.";
        onValueChanged(e) {
            let accent = e.value;
            for (let index in document.styleSheets) {
                let styleSheet = document.styleSheets[index],
                    href = styleSheet.href;
                if (href) {
                    let themeMarkerPosition = href.indexOf(this.themeMarker);
                    let startPosition = themeMarkerPosition + this.themeMarker.length,
                        endPosition = href.indexOf(".css"),
                        fileNamePart = href.substring(startPosition, endPosition);
                    if (fileNamePart.includes("custom-scheme")) {
                        styleSheet.disabled = !(
                            accent === fileNamePart.substring(fileNamePart.indexOf('.')+1)
                        );
                    }
                }
            }
        };
    }

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="themeData"
        [value]="themeData[0]"
        (onValueChanged)="onValueChanged($event)"
    ></dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :data-source="themeData"
            :value="themeData[0]"
            @value-changed="onValueChanged"
        ></DxSelectBox>
    </template>
        
    <script>
        import { DxSelectBox } from "devextreme-vue";
        export default {
            name: "App",
            components: {
                DxSelectBox,
            },
            data() {
                return {
                    themeData: ["light", "dark"],
                    themeMarker: "theme."
                };
            },
            methods: {
                onValueChanged(e) {
                    let accent = e.value;
                    for (let index in document.styleSheets) {
                        let styleSheet = document.styleSheets[index],
                            href = styleSheet.href;
                        if (href) {
                            let themeMarkerPosition = href.indexOf(this.themeMarker);
                            let startPosition = themeMarkerPosition + this.themeMarker.length,
                                endPosition = href.indexOf(".css"),
                                fileNamePart = href.substring(startPosition, endPosition);
                            if (fileNamePart.includes("custom-scheme")) {
                                styleSheet.disabled = !(
                                    accent === fileNamePart.substring(fileNamePart.indexOf('.')+1)
                                );
                            }
                        }
                    }
                }
            }
        };
    </script>


##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    import { SelectBox } from 'devextreme-react';

    const themeData = ["light", "dark"];
    const themeMarker = "theme.";

    function App() {
        const [value, setValue] = useState(themeData[0]);

        const onValueChanged = useCallback((accent) => {
            setValue(accent);
            for (let index in document.styleSheets) {
                let styleSheet = document.styleSheets[index],
                    href = styleSheet.href;
                if (href) {
                    let themeMarkerPosition = href.indexOf(themeMarker);
                    let startPosition = themeMarkerPosition + themeMarker.length,
                        endPosition = href.indexOf(".css"),
                        fileNamePart = href.substring(startPosition, endPosition);
                    if (fileNamePart.includes("custom-scheme")) {
                        styleSheet.disabled = !(
                            accent === fileNamePart.substring(fileNamePart.indexOf('.')+1)
                        );
                    }
                }
            }
        }, []);

        return (
            <React.Fragment>
                <SelectBox
                    dataSource={themeData}
                    value={value}
                    onValueChange={onValueChanged}
                />
            </React.Fragment>
        );
    }

    export default App;

---

You can use the StyleSheet API to switch between swatches and themes. Refer to the following GitHub repository for more information:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-project-template-theme-selector"
}
