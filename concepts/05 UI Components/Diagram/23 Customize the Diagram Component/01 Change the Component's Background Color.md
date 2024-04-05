Override the following CSS rule to change the Diagram component's background color:

---
##### jQuery

    <!-- tab: styles.css -->
    #diagram .dxdi-canvas .grid {
        fill: lightGray !important;
    }

##### Angular

    <!-- tab: app.component.css -->
    ::ng-deep #diagram .dxdi-canvas .grid {
        fill: lightGray !important;
    }

##### Vue

    <!-- tab: app.vue -->
    <style scoped>
        #diagram .dxdi-canvas .grid {
            fill: lightGray !important;
        }
    </style>

##### React

    <!-- tab: styles.css -->
    #diagram .dxdi-canvas .grid {
        fill: lightGray !important;
    }

---

![Change the Diagram's background color](/images/diagram/change-background-color.png)