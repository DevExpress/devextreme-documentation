DevExtreme UI components generate icons as HTML `<i>` elements with icon class assignments. The following code snippet demonstrates how an icon appears in the DOM:

    <!--HTML-->
    <i class="dx-icon dx-icon-home"></i>

DevExtreme UI components support external icon libraries that populate the DOM in the same way. Examples of such libraries include the following:

- [Font Awesome](https://fontawesome.com/)
- [Glyphicons](https://www.glyphicons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Fabric/Fluent UI](https://uifabricicons.azurewebsites.net/)

Follow the installation instructions of the library you want to integrate and set DevExtreme component **icon** properties as follows:

---
##### jQuery  

    <!-- tab: index.js -->
    $(function() {
        $("#fa5Button").dxButton({icon: "fas fa-home"}); // Font Awesome 5
        $("#fa4Button").dxButton({icon: "fa fa-home"}); // Font Awesome 4
        $("#glyphiconButton").dxButton({icon: "glyphicon glyphicon-home"}); // Glyphicons
        $("#ioniconsButton").dxButton({icon: "icon ion-md-home"}); // Ionicons
        $("#fabricFluentUIButton").dxButton({icon: "ms-Icon ms-Icon--Home"}); // Fabric/Fluent UI
    });
    
##### Angular  

    <!-- tab: app.component.html -->
    <dx-button icon="fas fa-home"></dx-button> <!-- Font Awesome 5 -->
    <dx-button icon="fa fa-home"></dx-button> <!-- Font Awesome 4 -->
    <dx-button icon="glyphicon glyphicon-home"></dx-button> <!-- Glyphicons -->
    <dx-button icon="icon ion-md-home"></dx-button> <!-- Ionicons -->
    <dx-button icon="ms-Icon ms-Icon--Home"></dx-button> <!-- Fabric/Fluent UI -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton icon="fas fa-home" /> <!-- Font Awesome 5 -->
        <DxButton icon="fa fa-home" /> <!-- Font Awesome 4 -->
        <DxButton icon="glyphicon glyphicon-home" /> <!-- Glyphicons -->
        <DxButton icon="icon ion-md-home" /> <!-- Ionicons -->
        <DxButton icon="ms-Icon ms-Icon--Home" /> <!-- Fabric/Fluent UI -->
    </template>
    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    function App() {
        return (
            <Button icon="fas fa-home" /> // Font Awesome 5
            <Button icon="fa fa-home" /> // Font Awesome 4
            <Button icon="glyphicon glyphicon-home" /> // Glyphicons
            <Button icon="icon ion-md-home" /> // Ionicons
            <Button icon="ms-Icon ms-Icon--Home" /> // Fabric/Fluent UI
        );
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .Icon("fas fa-home") // Font Awesome 5
        .Icon("fa fa-home") // Font Awesome 4
        .Icon("glyphicon glyphicon-home") // Glyphicons
        .Icon("icon ion-md-home") // Ionicons
        .Icon("ms-Icon ms-Icon--Home") // Fabric/Fluent UI
    )

---