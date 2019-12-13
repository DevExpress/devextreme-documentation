---
id: ui.dialog.confirm(messageHtml,title)
module: ui/dialog
export: confirm
---
---
##### shortDescription
Creates a confirmation dialog with a message and **Yes** and **No** buttons.

##### return: Promise<Boolean>
A Promise that is resolved with a Boolean value indicating whether a user has clicked **Yes** or **No**. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(messageHtml): String
The dialog's message. Can contain HTML elements.

##### param(title): String
The dialog's title.

---
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var result = DevExpress.ui.dialog.confirm("<i>Are you sure?</i>", "Confirm changes");
        result.done(function(dialogResult) {
            alert(dialogResult ? "Confirmed" : "Canceled");
        });
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import { confirm } from 'devextreme/ui/dialog';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit{
        ngAfterViewInit() { 
            let result = confirm("<i>Are you sure?</i>", "Confirm changes");
            result.then((dialogResult) => {
                alert(dialogResult ? "Confirmed" : "Canceled");
            });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import { confirm } from 'devextreme/ui/dialog';

    export default {
        mounted: function() {
            this.$nextTick(function() {
                let result = confirm("<i>Are you sure?</i>", "Confirm changes");
                result.then((dialogResult) => {
                    alert(dialogResult ? "Confirmed" : "Canceled");
                });
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import { confirm } from 'devextreme/ui/dialog';

    class App extends React.Component {
        componentDidMount() { 
            let result = confirm("<i>Are you sure?</i>", "Confirm changes");
            result.then((dialogResult) => {
                alert(dialogResult ? "Confirmed" : "Canceled");
            });
        }
    }
    export default App;

---