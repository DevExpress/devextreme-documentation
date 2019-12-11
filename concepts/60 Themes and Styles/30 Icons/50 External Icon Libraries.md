Icons in widgets are inserted into the DOM as `<i>` elements. When you set a widget's **icon** option, its value is used to form the `class` attribute of the `<i>` element. For instance, the code below ...

    icon: "home"

... renders into the DOM as follows:

    <!--HTML-->
    <i class="dx-icon dx-icon-home"></i>

This allows DevExtreme widgets to support icons from external icon libraries, provided that they too should be specified in the `class` attribute.

[Font Awesome](https://fontawesome.com), [Glyphicons](https://www.glyphicons.com), and [Ionicons](https://ionicons.com) are examples of such libraries. Follow the installation tutorial for the library you want to use and set the **icon** option as follows:

---
##### jQuery  


    <!--JavaScript-->
    $(function() {
        $("#homeButton").dxButton({
            icon: "fas fa-home" // Font Awesome 5
            icon: "fa fa-home" // Font Awesome 4
            icon: "glyphicon glyphicon-home" // Glyphicons
            icon: "ion ion-home" // Ionicons
        });
    });
    
##### Angular  

    <!--HTML-->
    <dx-button ... 
        icon="fas fa-home" <!-- Font Awesome 5 -->
        icon="fa fa-home" <!-- Font Awesome 4 -->
        icon="glyphicon glyphicon-home" <!-- Glyphicons -->
        icon="ion ion-home"> <!-- Ionicons -->
    </dx-button>

##### Vue

    <template>
        <dx-button ... 
            icon="fas fa-home" <!-- Font Awesome 5 -->
            icon="fa fa-home" <!-- Font Awesome 4 -->
            icon="glyphicon glyphicon-home" <!-- Glyphicons -->
            icon="ion ion-home" /> <!-- Ionicons -->
    </template>
    <script>
    import DxButton from 'devextreme-vue/button';

    export default {
        components: {
            DxButton
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <Button
                    icon="fas fa-home" // Font Awesome 5
                    icon="fa fa-home" // Font Awesome 4
                    icon="glyphicon glyphicon-home" // Glyphicons
                    icon="ion ion-home" // Ionicons
                />
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .Icon("fas fa-home") // Font Awesome 5
        .Icon("fa fa-home") // Font Awesome 4
        .Icon("glyphicon glyphicon-home") // Glyphicons
        .Icon("ion ion-home") // Ionicons
    )

---