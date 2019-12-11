Templates in DevExtreme ASP.NET MVC Controls support ERB-style syntax. The following constructions are available.

- `<% code %>` - executes the code.
- `<%= value %>` - prints the value as is (for example, `<b>John</b>`).
- `<%- value %>` - prints the value escaping HTML (`<b>John</b>` becomes `&lt;b&gt;John&lt;/b&gt;`).

There are four ways to declare templates in DevExtreme ASP.NET MVC Controls.