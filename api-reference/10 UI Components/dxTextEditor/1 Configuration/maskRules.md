---
id: dxTextEditor.Options.maskRules
type: Object
default: '{}'
---
---
##### shortDescription
Specifies custom mask rules.

---
Each field of an object passed to this option corresponds to a single rule. A field name is a character used in a mask enclosed in quotes. A field accepts the following values.

    <!--JavaScript-->
    const CustomMaskRules = {
        //a single character
        's': '$',

        // a regular expression
        'h': /[0-9A-F]/,

        // an array of characters
        'n': ['$', '%', '&', '@'],

        // a function
        'f': function(char) {
            const allowedChars = ['a', 'b', 'c', '$', '_', '.'];
            return allowedChars.includes(char);
         }
    }

A function that specifies a custom rule accepts the following arguments:

- Entered character
- Index of the character within the full string
- Full string

The function should return **true** if the character is allowed, otherwise it should return **false**.

The following code snippet demonstrates the use of the function to set a dynamic mask. In this example, the mask enforces the correct input of time values:

---
##### jQuery
 
    <!-- tab: index.js -->
    $(function () {
        $("#{widgetName}").dx{WidgetName}({
            mask: "Hh:Mm",
            maskRules: {
                H: char => char >= 0 && char <= 2,
                h: (char, index, fullStr) => {
                    if (fullStr[0] == '2')
                        return [0,1,2,3].includes(parseInt(char));
                    else
                        return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
                },
                M: char => char >= 0 && char <= 5,
                m: char => char >= 0 && char <= 9
            }
        });
    });

##### Angular
 
    <!-- tab: app.component.html -->
    <dx-{widget-name}
        mask="Hh:Mm"
        [maskRules]="rules">
    </dx-{widget-name}>
 
    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        rules = {
            H: char => char >= 0 && char <= 2,
            h: (char, index, fullStr) => {
                if (fullStr[0] == '2')
                    return [0,1,2,3].includes(parseInt(char));
                else
                    return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
            },
            M: char => char >= 0 && char <= 5,
            m: char => char >= 0 && char <= 9
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
 
    import { Dx{WidgetName}Module } from 'devextreme-angular';
 
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            mask="Hh:Mm"
            :mask-rules="rules"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                rules: {
                    H: char => char >= 0 && char <= 2,
                    h: (char, index, fullStr) => {
                        if (fullStr[0] == '2')
                            return [0,1,2,3].includes(parseInt(char));
                        else
                            return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
                    },
                    M: char => char >= 0 && char <= 5,
                    m: char => char >= 0 && char <= 9
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    const rules = {
        H: char => char >= 0 && char <= 2,
        h: (char, index, fullStr) => {
            if (fullStr[0] == '2')
                return [0,1,2,3].includes(parseInt(char));
            else
                return [0,1,2,3,4,5,6,7,8,9].includes(parseInt(char));
        },
        M: char => char >= 0 && char <= 5,
        m: char => char >= 0 && char <= 9
    };

    const App = () => (
        <{WidgetName}
            mask="Hh:Mm"
            maskRules={rules}   
        />
    );

    export default App;
 
---
