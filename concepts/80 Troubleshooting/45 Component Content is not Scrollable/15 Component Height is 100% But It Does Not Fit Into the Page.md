This situation usually occurs when none of parent elements has a fixed height. For example, on the image below DataGrid does not fit the page. Page scrollbar appears. 

![DataGrid exceeds the page](/images/Troubleshooting/scrolling-whole-page.gif)

If a parent element sets a relative height, one of its parents should set a fixed height. 

If you want to fill up the entire vertical space and cannot use fixed heights, set `100%` height for all parents up to `<html>`.