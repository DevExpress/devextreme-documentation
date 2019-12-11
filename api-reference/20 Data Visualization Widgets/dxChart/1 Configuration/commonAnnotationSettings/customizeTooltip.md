---
id: dxChartCommonAnnotationConfig.customizeTooltip
type: function(annotationItem)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Customizes the text and appearance of the annotation's tooltip.

##### param(annotationItem): dxChartAnnotationConfig | any
The annotation's [configuration object](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/annotations '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/').

##### return: Object
The tooltip's text or markup and appearance settings.

---
Set this option to a function that returns an object with the following fields:

- **color**        
Specifies the color that fills the tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they occupy.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

#include dataviz-ref-functioncontext

#####See Also#####
- [tooltipEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAnnotationSettings/tooltipEnabled.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#tooltipEnabled')