- **Data Binding**    
CardView supports loading and updating data from different [data source](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') types. It handles large data sets efficiently with both local data stores and [remote data operations](https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/WebAPIService/).

- **Editing Operations**    
CardView allows users to add, update, and delete cards. You can specify which operations are accessible to users by defining [allowAdding](/api-reference/10%20UI%20Components/dxCardView/9%20Types/dxCardViewEditing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/editing/#allowAdding'), [allowDeleting](/api-reference/10%20UI%20Components/dxCardView/9%20Types/dxCardViewEditing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/editing/#allowDeleting'), and [allowUpdating](/api-reference/10%20UI%20Components/dxCardView/9%20Types/dxCardViewEditing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/editing/#allowUpdating') in the [editing](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/editing.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/editing/') object.

- **Filtering, Sorting, and Searching**    
Configure [headerFilter](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/headerFilter.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/headerFilter/') or [filterPanel](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/filterPanel.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/filterPanel/') to allow users to filter CardView data. Enable sorting by single or multiple fields in the [sorting](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/sorting.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/sorting/') object. Specify search settings in the [searchPanel](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/searchPanel/) object. 

- **Selection Modes**    
CardView supports single and multiple card selection. Users can select cards with mouse actions or [keyboard shortcuts](/Documentation/Guide/UI_Components/CardView/Accessibility/#Keyboard_Navigation). Configure selection mode and other settings in the [selection](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/selection/) object.

- **Column Hiding and Reordering**    
You can use [columnChooser](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columnChooser/) to change column visibiity. To reorder columns, rearrange column headers in the **headerPanel**. You can also initialize columns in a specific order and visibility state by configuring the [columns[]](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/) array.

- **Card Customization**    
You can customize the appearance of card visual elements with different properties, including:
    - [cardCover](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardCover.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/cardCover/')
    - [cardHeader](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardHeader.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/cardHeader/')
    - [cardFooterTemplate](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardFooterTemplate.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardFooterTemplate')
    - [cardContentTemplate](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardContentTemplate.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardContentTemplate')
    - **columns**.[fieldTemplate](/api-reference/10%20UI%20Components/dxCardView/9%20Types/ColumnProperties/fieldTemplate.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#fieldTemplate')

    To customize card layout and appearance, configure [cardTemplate](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardTemplate.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardTemplate').

- **Component Customization**    
The following properties customize the appearance and functionality of the CardView component:
    - [toolbar](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/toolbar.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/toolbar/')
    - [headerPanel](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/headerPanel.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/headerPanel/')
    - [paging](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/paging.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/paging/')

- **Adaptability**    
CardView supports screens of all sizes. To adapt the component to your needs, you can specify the following properties:
    - [cardsPerRow](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardsPerRow.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardsPerRow')
    - [cardMaxWidth](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardMaxWidth)/[cardMinWidth](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#cardMinWidth)
    - [width](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#width)/[height](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/#height)