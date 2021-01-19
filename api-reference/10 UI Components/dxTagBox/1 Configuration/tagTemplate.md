---
id: dxTagBox.Options.tagTemplate
type: template
default: 'tag'
---
---
##### shortDescription
Specifies a custom template for tags.

##### param(itemData): Object
The current tag's data.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "tag" }

##### return: String | Element | jQuery
A template name or container.

---
This template replaces the default tag template. If you need to recreate the default tag appearance and specific template elements (such as the closing button) in your custom template, do so as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            // ...
            tagTemplate: function(tagData) {
                return $("<div />")
                    .addClass("dx-tag-content")
                    .append(
                        $("<span />").text("TAG CONTENT"),
                        $("<div />").addClass("dx-tag-remove-button")
                    );
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box ...
        tagTemplate="tagTemplate">
        <div *dxTemplate="let tagData of 'tagTemplate'" class="dx-tag-content">
            TAG CONTENT
            <div class="dx-tag-remove-button"></div>
        </div>
    </dx-tag-box>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTagBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTagBoxModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTagBox ...
            tag-template="tagTemplate">
            <div slot="tagTemplate" slot-scope="{ tagData }" class="dx-tag-content">
                TAG CONTENT
                <div class="dx-tag-remove-button"></div>
            </div>
        </DxTagBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTagBox from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TagBox from 'devextreme-react/tag-box';

    const renderTag = (tagData) => {
        return (
            <div class="dx-tag-content">
                TAG CONTENT
                <div class="dx-tag-remove-button"></div>
            </div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <TagBox ...
                    tagRender={renderTag}
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Customize Item Appearance](/concepts/05%20Widgets/TagBox/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')