The simplest way of providing data for **DataGrid** is using an array of plain objects. Each object in this array represents a grid row, while the fields of this object provide information for grid columns. For an example, consider the following code snippet.

	<!--JavaScript-->var gridDataSource = [
		{ author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi' },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction' }
	];

This array contains three objects that will be represented in a grid by three rows. Each object holds four fields providing data for four grid columns. Next, you need to bind this array to your grid. To learn how to do it, refer to the [Bind Data](/concepts/10%20UI%20Widgets/70%20Data%20Grid/010%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Bind_Data') topic.
