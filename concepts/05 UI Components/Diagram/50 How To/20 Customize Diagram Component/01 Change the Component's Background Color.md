Override the following [CSS rule](/concepts/60%20Themes%20and%20Styles/10%20HTML-Based%20Components%20Customization/40%20Individual%20CSS%20Classes.md '/Documentation/Guide/Themes_and_Styles/HTML-Based_Components_Customization/#Individual_CSS_Classes') to change the Diagram component's background color:

C:\Users\mikheeva.svetlana\Documents\DevExtreme Docs\concepts\60 Themes and Styles\10 HTML-Based Components Customization\40 Individual CSS Classes.md
---
##### jQuery

    <!-- tab: styles.css -->
    #diagram .dxdi-canvas .grid {
        fill: azure !important;
    }

##### Angular

    <!-- tab: app.component.css -->
    ::ng-deep #diagram .dxdi-canvas .grid {
        fill: azure !important;
    }

##### Vue

    <!-- tab: app.vue -->
    <style scoped>
        #diagram .dxdi-canvas .grid {
            fill: azure !important;
        }
    </style>

##### React

    <!-- tab: styles.css -->
    #diagram .dxdi-canvas .grid {
        fill: azure !important;
    }

---
