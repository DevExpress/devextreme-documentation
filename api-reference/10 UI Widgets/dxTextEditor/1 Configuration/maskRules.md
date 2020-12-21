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

The following code snippet demonstrates the use of the function to set a dynamic mask. In this example, the mask enforces correct input of time values:

---
##### jQuery
 
    <!-- tab: index.js -->
    $(function () {
        $("#textBox").dxTextBox({
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
    <dx-text-box mask="Hh:Mm" [maskRules]="rules">
    </dx-text-box>
 
    <!-- tab: app.component.ts -->
    import { NgModule, Component, enableProdMode } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { DxTextBoxModule } from 'devextreme-angular';


    @Component({
        styleUrls: ['./app.component.css'],
        selector: 'demo-app',
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        rules: any;

        constructor() {
            this.rules =  {
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

    @NgModule({
        imports: [
            BrowserModule,
            DxTextBoxModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    platformBrowserDynamic().bootstrapModule(AppModule);

 
---