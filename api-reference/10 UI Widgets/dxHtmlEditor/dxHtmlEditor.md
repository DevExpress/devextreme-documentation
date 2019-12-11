---
module: ui/html_editor
export: default
inherits: ..\Editor\Editor.md
---
---
##### widgettree
valueType: "html",
value: "This is <b>HtmlEditor</b>.<br/>Select text and use a toolbar control.",
toolbar: {
    items: ["bold", "italic", "color", "background", "link",
    {
        formatName: "header",
        formatValues: [1, 2, 3, false]
    }, "variable"
    ]
},
variables: {
    dataSource: [ "FirstName", "LastName", "Company" ],
    escapeChar: [ "{", "}" ]
}

##### shortDescription
[tags] ctp

**HtmlEditor** is a WYSIWYG text editor build on top of [Quill](https://quilljs.com), designed to support HTML and Markdown output formats.

**HtmlEditor** is at the Community Technology Preview (CTP) development stage. That means that the widget is available for testing, but its concept, design and behavior can be reconsidered and changed without notice.

---
[note] The **HtmlEditor** requires the [Quill](https://www.npmjs.com/package/quill) library.

#include common-ref-roottopic-introduction

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            valueType: "html",
            toolbar: {
                items: [
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator", 
                    "alignLeft", "alignCenter", "alignRight"
                ]
            }
        })
    })
    
    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css">
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div id="htmlEditorContainer">
            <p>
                <b>Lorem ipsum dolor sit amet</b>, 
                <i>consectetur adipiscing elit</i>, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </body>

#####Angular

    <!--HTML-->
    <dx-html-editor
        valueType="html">
        <dxo-toolbar [items]="items"></dxo-toolbar>
        <p>
            <b>Lorem ipsum dolor sit amet</b>, 
            <i>consectetur adipiscing elit</i>, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [
            "bold", "italic", "separator", {
                formatName: "size",
                formatValues: ["11px", "12px", "16px"]
            }, "separator", 
            "alignLeft", "alignCenter", "alignRight"
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### AngularJS

    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css">
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div ng-controller="DemoController">
            <div dx-html-editor="{
                valueType: 'html',
                toolbar: toolbarConfig
            }">
                <p>
                    <b>Lorem ipsum dolor sit amet</b>, 
                    <i>consectetur adipiscing elit</i>, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </body>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.toolbarConfig = {
                items: [
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator", 
                    "alignLeft", "alignCenter", "alignRight"
                ]
            };
        });

##### Knockout  

    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css">
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css">
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div data-bind="dxHtmlEditor: {
            valueType: 'html',
            toolbar: toolbarConfig
        }">
            <p>
                <b>Lorem ipsum dolor sit amet</b>, 
                <i>consectetur adipiscing elit</i>, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </body>

    <!--JavaScript-->
    var viewModel = {
        toolbarConfig: {
            items: [
                "bold", "italic", "separator", {
                    formatName: "size",
                    formatValues: ["11px", "12px", "16px"]
                }, "separator", 
                "alignLeft", "alignCenter", "alignRight"
            ]
        }
    };
    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .ID("htmlEditor")
        .ValueType(HtmlEditorValueType.Html)
        .Content(@<text>
            <p><b>Lorem ipsum dolor sit amet</b>,
            <i>consectetur adipiscing elit</i>,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </text>)
        .Toolbar(t => t
            .Items(i => {
                i.Add().FormatName("bold");
                i.Add().FormatName("italic");
                i.Add().FormatName("separator");
                i.Add().FormatName("size").FormatValues(new[] { "11px", "12px", "16px" });
                i.Add().FormatName("separator");
                i.Add().FormatName("alignLeft");
                i.Add().FormatName("alignCenter");
                i.Add().FormatName("alignRight");
            })
        )
    )
    <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>

    <!--Razor VB-->
    @(Html.DevExtreme().HtmlEditor() _
        .ID("htmlEditor") _
        .ValueType(HtmlEditorValueType.Html) _
        .Content(
            "<p><b>Lorem ipsum dolor sit amet</b>, " _
            & "<i>consectetur adipiscing elit</i>, " _
            & "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
        ) _
        .Toolbar(Sub(t)
            t.Items(Sub(items)
                items.Add().FormatName("bold")
                items.Add().FormatName("italic")
                items.Add().FormatName("separator");
                items.Add().FormatName("size").FormatValues({"11px", "12px", "16px"})
                items.Add().FormatName("separator");
                items.Add().FormatName("alignLeft")
                items.Add().FormatName("alignCenter")
                items.Add().FormatName("alignRight")
            End Sub)
        End Sub)
    )
    <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>

##### Vue

    <template>
        <dx-html-editor
            value-type="html">
            <dx-toolbar :items="items" />
                <p>
                    <b>Lorem ipsum dolor sit amet</b>, 
                    <i>consectetur adipiscing elit</i>, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
        </dx-html-editor>
    </template>
    <script>
    import { DxHtmlEditor, DxToolbar } from "devextreme-vue/html-editor";

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar
        },
        data() {
            return {
                items: [
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator",
                    "alignLeft", "alignCenter", "alignRight"
                ]
            };
        }
    }
    </script>

##### React

    import React from "react";
    import HtmlEditor, { Toolbar } from "devextreme-react/html-editor";

    const items = [
        "bold", "italic", "separator", {
            formatName: "size",
            formatValues: ["11px", "12px", "16px"]
        }, "separator",
        "alignLeft", "alignCenter", "alignRight"
    ];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor
                    valueType="html">
                        <Toolbar items={items} />
                        <p>
                            <b>Lorem ipsum dolor sit amet</b>, 
                            <i>consectetur adipiscing elit</i>, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                </HtmlEditor>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/"
}

#####See Also#####
- [Overview](/concepts/05%20Widgets/HtmlEditor/00%20Overview.md '/Documentation/Guide/Widgets/HtmlEditor/Overview/')