Add the following CSS rules to change the color of connector points:

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

![Change the connector points color](/images/diagram/change-connector-points-color.png)