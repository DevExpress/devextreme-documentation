Toolbar items allow users to format the HTML Editor's content and perform actions on it.

Predefined toolbar items include:

* Buttons that apply single-choice formats to the text.
* Action buttons.
* Select boxes that apply multiple-choice formats. 
* Separators that are not user-interactive and only divide other elements.

![DevExtreme HTML5 JavaScript HTML Editor Toolbar](/images/htmlEditor/visual_elements/toolbar.png)

The following table lists toolbar items and the formats they apply (if applicable):

<table class="dx-table">
    <tr>
        <th>Toolbar item <a href="/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name">name</a></th>
        <th><a href="/Documentation/Guide/UI_Components/HtmlEditor/Formats/">Format</a></th>
        <th><a href="/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#acceptedValues">acceptedValues</a></th>
    </tr>
    <tr>
        <td>"background"</td>
        <td>"background"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"  target="_blank">background-color</a> CSS property accepts.</td>
    </tr>
    <tr>
        <td>"bold"</td>
        <td>"bold"</td>
        <td>true or false</td>
    </tr>
    <tr>
        <td>"color"</td>
        <td>"color"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">color</a> CSS property accepts.</td>
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
        <td>Object ({ value: String, escapeChar: String | Array&lt;String&gt; })</td>
    </tr>
    <tr>
        <td>"font"</td>
        <td>"font"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family" target="_blank">font-family</a> CSS property accepts.</td>
    </tr>
    <tr>
        <td>"size"</td>
        <td>"size"</td>
        <td>Any value the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size" target="_blank">font-size</a> CSS property accepts.</td>
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
    <tr>
        <td>"cellProperties"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"tableProperties"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertTable"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertHeaderRow"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertRowAbove"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertRowBelow"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertColumnLeft"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"insertColumnRight"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"deleteColumn"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"deleteRow"</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>"deleteTable"</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>
 
To add a button to the toolbar, add its [name](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/') to the [items](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/') array:
 
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
            <dxi-item name="bold"/>
            <dxi-item name="italic"/>
            <dxi-item name="alignRight"/>
            <dxi-item name="alignLeft"/>
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
                <DxItem name="bold"/>
                <DxItem name="italic"/>
                <DxItem name="alignRight"/>
                <DxItem name="alignLeft"/>
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
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
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item name="bold"/>
                        <Item name="italic"/>
                        <Item name="alignRight"/>
                        <Item name="alignLeft"/>
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
                i.Add().Name("bold");
                i.Add().Name("italic");
                i.Add().Name("alignRight");
                i.Add().Name("alignLeft");
            })
        )
    )

---
 
To add a select box, specify the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') and [acceptedValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/acceptedValues.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#acceptedValues'):
 
---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    name: "header",
                    acceptedValues: [1, 2, 3, false]
                }, {
                    name: "align",
                    acceptedValues: ["left", "right", "center"]
                }]
            }
        })
    })

##### Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item
                [acceptedValues]="headerAcceptedValues"
                name="header"
            />
            <dxi-item
                [acceptedValues]="alignAcceptedValues"
                name="align"
            />
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        headerAcceptedValues =  [1, 2, 3, false];
        alignAcceptedValues = ["left", "right", "center"];
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
                    :accepted-values="headerAcceptedValues"
                    name="header"
                />
                <DxItem
                    :accepted-values="alignAcceptedValues"
                    name="align"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
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
                headerAcceptedValues: [1, 2, 3, false],
                alignAcceptedValues: ['left', 'right', 'center']
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { HtmlEditor, Toolbar, Item } from 'devextreme-react/html-editor';

    const headerAcceptedValues = [1, 2, 3, false];
    const alignAcceptedValues = ['left', 'right', 'center'];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor>
                    <Toolbar>
                        <Item
                            acceptedValues={headerAcceptedValues}
                            name="header"
                        />
                        <Item
                            acceptedValues={alignAcceptedValues}
                            name="align"
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
                i.Add().Name("header")
                    .AcceptedValues(new JS ("[1, 2, 3, false]"));
                i.Add().Name("align")
                    .AcceptedValues(new[] { "left", "right", "center" })
            })
        )
    )

---
