### v5.0.0

#### What Changed

- Removed the Node.js streaming API (`ExcelJS.stream`) because its dependencies triggered security scanner warnings. The following classes are no longer available:
    - `ExcelJS.stream.xlsx.WorkbookWriter`
    - `ExcelJS.stream.xlsx.WorkbookReader`
- Removed dependencies that only the streaming API used:
    - **archiver**
    - **unzipper**
    - **tmp**
- Removed methods that were deprecated in v4.0 and only threw errors:
    - `workbook.xlsx.createInputStream()`
    - `workbook.csv.createInputStream()`
- Deprecated `Row.commit()` - only affected the removed streaming writer. The method remains for backward compatibility and has no effect.
- Updated TypeScript definitions:
    - Removed the `stream` namespace and all its types.
    - Removed the following options from `XlsxWriteOptions` because they had no effect:
        - `filename`
        - `stream`
        - `useSharedStrings`
    - Removed `Worksheet.commit()` - standard worksheets never implemented. Calls to this method were compiled but threw errors at runtime.
- Fixed an error thrown when you set `useStyles` to `false` to write a workbook that contains conditional formatting. The library now writes conditional formatting styles regardless of the `useStyles` value.

#### How to Update Existing Apps

[important] If you use `devextreme-exceljs-fork` only to export DataGrid data, you do not need to update your application.

The following browser bundles never included streaming API:

- `dist/dx-exceljs-fork.js`
- `dist/dx-exceljs-fork.min.js`
- `dist/dx-exceljs-fork.bare.js`
- `dist/dx-exceljs-fork.bare.min.js`

Only TypeScript updates can affect apps that run in a browser.

[note] `ExcelJS.Workbook` retains the entire workbook in memory. If your app uses streaming API to write/read very large files, continue to use v4.x.

**Replace `WorkbookWriter` with `Workbook`**

v4.x and earlier:

    <!-- tab: JavaScript -->
    const workbook = new ExcelJS.stream.xlsx.WorkbookWriter({filename: './file.xlsx'});
    const worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.addRow(['a', 'b']).commit();
    await workbook.commit();

v5.0.0+:

    <!-- tab: JavaScript -->
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.addRow(['a', 'b']);
    await workbook.xlsx.writeFile('./file.xlsx');

You can also call `workbook.xlsx.write(stream)` to write to a stream or `workbook.xlsx.writeBuffer()` to write to a buffer.

**Replace `WorkbookReader` with `Workbook`**

v4.x and earlier:

    <!-- tab: JavaScript -->
    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader('./file.xlsx');
    for await (const worksheetReader of workbookReader) {
        for await (const row of worksheetReader) {
            // ...
        }
    }

v5.0.0+:

    <!-- tab: JavaScript -->
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./file.xlsx');
    workbook.eachSheet(worksheet => {
        worksheet.eachRow(row => {
            // ...
        });
    });

You can also call `workbook.xlsx.read(stream)` to read from a stream or `workbook.xlsx.load(buffer)` to read a buffer.

**Replace `createInputStream()` with `read()`**

Call `workbook.xlsx.read(stream)` or `workbook.csv.read(stream)` instead of `createInputStream()`:

v4.x and earlier:

    <!-- tab: JavaScript -->
    stream.pipe(workbook.xlsx.createInputStream());

v5.0.0+:

    <!-- tab: JavaScript -->
    await workbook.xlsx.read(stream);

**Remove `Row.commit()` Calls**

`Row.commit()` is deprecated and has no effect. The method is kept so that existing calls do not throw errors, but you can safely remove these calls.

**Update TypeScript Code**

- Replace streaming API classes with `Workbook` as shown above. Remove other references to the `stream` namespace.
- Remove the following options from `XlsxWriteOptions` objects because they had no effect: `filename`, `stream`, and `useSharedStrings`. You can still specify `useStyles` and `zip`.
- Remove `worksheet.commit()` calls. These calls threw errors at runtime.

**Check Your Dependencies**

The **devextreme-exceljs-fork** package no longer installs **archiver**, **unzipper**, and **tmp**. If your app uses these packages, add them to your app's `package.json`.
