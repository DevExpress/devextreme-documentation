Toolbar items allow users to format the **HtmlEditor**'s content and perform actions on it.

Predefined toolbar items include:

* Buttons that apply single-choice formats to the text.
* Action buttons.
* Select boxes that apply multiple-choice formats. 
* Separators that are not user-interactive and only divide other elements.

![DevExtreme HTML5 JavaScript HtmlEditor Toolbar](/images/htmlEditor/visual_elements/toolbar.png)

The following table lists toolbar items and the formats they apply (if applicable):

<table class="dx-table">
    <tr>
        <th>Toolbar Item</th>
        <th><a href="/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName">formatName</a></th>
        <th><a href="/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues">formatValue</a></th>
    </tr>
    <tr>
        <td>"background"</td>
        <td>"background"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a> CSS property accepts.</td>
    </tr>
    <tr>
        <td>"bold"</td>
        <td>"bold"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"color"</td>
        <td>"color"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value">color</a> CSS property accepts.</td>
    </tr>
    <tr>
        <td>"italic"</td>
        <td>"italic"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"link"</td>
        <td>"link"</td>
        <td>String <br/> or <br/> Object ({ href: String, text: String, target: Boolean })</td>
    </tr>
    <tr>
        <td>"image"</td>
        <td>"extendedImage"</td>
        <td>String <br/> or <br/> Object ({ src: String, width: Number, height: Number, alt: String })</td>
    </tr>
    <tr>
        <td>"strike"</td>
        <td>"strike"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"subscript"</td>
        <td>"script"</td>
        <td>"sub"</td>
    </tr>
    <tr>
        <td>"superscript"</td>
        <td>"script"</td>
        <td>"super"</td>
    </tr>
    <tr>
        <td>"underline"</td>
        <td>"underline"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"blockquote"</td>
        <td>"blockquote"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"header"</td>
        <td>"header"</td>
        <td>1, 2, 3, 4, 5, or 6</td>
    </tr>
    <tr>
        <td>"increaseIndent"</td>
        <td>"indent"</td>
        <td>"+1"</td>
    </tr>
    <tr>
        <td>"decreaseIndent"</td>
        <td>"indent"</td>
        <td>"-1"</td>
    </tr>
    <tr>
        <td>"orderedList"</td>
        <td>"list"</td>
        <td>"ordered"</td>
    </tr>
    <tr>
        <td>"bulletList"</td>
        <td>"list"</td>
        <td>"bullet"</td>
    </tr>
    <tr>
        <td>"alignLeft"</td>
        <td>"align"</td>
        <td>"left"</td>
    </tr>
    <tr>
        <td>"alignCenter"</td>
        <td>"align"</td>
        <td>"center"</td>
    </tr>
    <tr>
        <td>"alignRight"</td>
        <td>"align"</td>
        <td>"right"</td>
    </tr>
    <tr>
        <td>"alignJustify"</td>
        <td>"align"</td>
        <td>"justify"</td>
    </tr>
    <tr>
        <td>"codeBlock"</td>
        <td>"code-block"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"variable"</td>
        <td>"variable"</td>
        <td>Object {{ value: String, escapeChar: String | Array&lt;String&gt; }}</td>
    </tr>
    <tr>
        <td>"undo"</td>
        <td>-</td>
        <td>-</td>
    </tr>
        <tr>
        <td>"redo"</td>
        <td>-</td>
        <td>-</td>
    </tr>
        <tr>
        <td>"clear"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"separator"</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>
 
To add a button to the toolbar, add its [name](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/') to the [items](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/') array:
 
---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ "bold", "italic", "alignRight", "alignLeft" ]
            }
        })
    })

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item formatName="bold"/>
            <dxi-item formatName="italic"/>
            <dxi-item formatName="alignRight"/>
            <dxi-item formatName="alignLeft"/>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem format-name="bold"/>
                <DxItem format-name="italic"/>
                <DxItem format-name="alignRight"/>
                <DxItem format-name="alignLeft"/>
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxHtmlEditor,
        DxToolbar,
        DxItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar,
            DxItem
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item formatName="bold"/>
                        <Item formatName="italic"/>
                        <Item formatName="alignRight"/>
                        <Item formatName="alignLeft"/>
                    </Toolbar>
                </HtmlEditor>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .ID("htmlEditor")
        .Toolbar(t => t
            .Items(i => {
                i.Add().FormatName("bold");
                i.Add().FormatName("italic");
                i.Add().FormatName("alignRight");
                i.Add().FormatName("alignLeft");
            })
        )
    )

---
 
To add a select box, specify the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') and [formatValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues'):
 
---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "header",
                    formatValues: [1, 2, 3, false]
                }, {
                    formatName: "align",
                    formatValues: ["left", "right", "center"]
                }]
            }
        })
    })

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                [formatValues]="headerFormatValues"
                formatName="header"
            />
            <dxi-item
                [formatValues]="alignFormatValues"
                formatName="align"
            />
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        headerFormatValues =  [1, 2, 3, false];
        alignFormatValues = ["left", "right", "center"];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxHtmlEditor>
            <DxToolbar>
                <DxItem
                    :format-values="headerFormatValues"
                    format-name="header"
                />
                <DxItem
                    :format-values="alignFormatValues"
                    format-name="align"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DxHtmlEditor,
        DxToolbar,
        DxItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar,
            DxItem
        },
        data() {
            return {
                headerFormatValues: [1, 2, 3, false],
                alignFormatValues: ['left', 'right', 'center']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    const headerFormatValues = [1, 2, 3, false];
    const alignFormatValues = ['left', 'right', 'center'];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item
                            formatValues={headerFormatValues}
                            formatName="header"
                        />
                        <Item
                            formatValues={alignFormatValues}
                            formatName="align"
                        />
                    </Toolbar>
                </HtmlEditor>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => {
                i.Add().FormatName("header")
                    .FormatValues(new JS ("[1, 2, 3, false]"));
                i.Add().FormatName("align")
                    .FormatValues(new[] { "left", "right", "center" })
            })
        )
    )

---
