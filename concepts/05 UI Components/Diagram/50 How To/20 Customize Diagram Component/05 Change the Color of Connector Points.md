Add the following [CSS rules](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/40%20Individual%20CSS%20Classes.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Individual_CSS_Classes') to change the color of connector points:

---
##### jQuery

    <!-- tab: styles.css -->
    .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector) {
        stroke: red;
    }
    .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector).active {
        fill: red; 
    }

##### Angular

    <!-- tab: app.component.css -->
    ::ng-deep .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector) {
        stroke: red;
    }
    ::ng-deep .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector).active {
        fill: red; 
    }

##### Vue

    <!-- tab: app.vue -->
    <style scoped>
        .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector) {
            stroke: red;
        }
        .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector).active {
            fill: red; 
        }
    </style>

##### React

    <!-- tab: styles.css -->
    .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector) {
        stroke: red;
    }
    .dx-diagram .dxdi-control .dxdi-canvas .connection-point:not(.selector).active {
        fill: red; 
    }

---