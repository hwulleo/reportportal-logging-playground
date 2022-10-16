const logger = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');

describe('Table Logging', function () {
  before(function () {
    //might do something here to talk to a DB
  });
  
  it('Original attempt at table logging', function () {
    logger.setDescription(
      'first attempt at making an HTML table',
    );

    let smallListOfObjects = [
      { Name: "John", Job: "plumber", isVip: true},
      { Name: "James", Job: "farmer", isVip: false},
      { Name: "Cleo", Job: "psychic", isVip: true}
    ]
    let htmlTable = toHtmlTableOriginal(smallListOfObjects);
    logger.info(htmlTable);

  });

  function toHtmlTableOriginal(arrayOfObject)
  {
    //Skip doing anything if the object is not an array or does not contain any elements
    if(!Array.isArray(arrayOfObject))
    {
      throw "Object passed to toHtmlTable is not an array";
    }
    if(!arrayOfObject || arrayOfObject === 'null' || arrayOfObject === 'undefined' || arrayOfObject.length === 0)
    {
      return "Table is empty";
    }
    //Set up the basic table structure
    let htmlTable = `<div style='width: 1000px; height: 700px; overflow: auto;'>
                        <table border='1px' cellpadding='5' cellspacing='0' style='border: solid 1px Silver; font-size: x-small;'>
                          <thead valign='top' style='background : #19607D; color: white;'>
                            <tr valign='top'>`;
    //Create the header of the table based on the object's properties of the first object in the list
    //let objectProperties = Object.entries(arrayOfObject[0]);
    for (const property in arrayOfObject[0]) {
      htmlTable += `          <th style='position: sticky; top: 0; background: #19607D; color: white;'>
                                <b>
                                  <div style ='width: 100 px; height: 30px; overflow: auto;'>
                                    ${property}
                                  </div>
                                </b>
                              </th>`
    }
    htmlTable += `          </tr>
                          </thead>
                          <tbody>`;
    for (const row of arrayOfObject) {
      htmlTable += `        <tr>`;
      for (const property in row) {
        htmlTable += `          <td>${row[property]}</td>`;
      }
      htmlTable += `        </tr>`;
    }

    htmlTable += `        </tbody>      
                  </table>
                </div>`;
    return htmlTable;
  }


  /*
  The Rules:
  
  - All data in the table should be able to scroll into view

  - If the data in a cell is beyond 1000 characters, it should be truncated.

  - The table should have a sticky header (the header remains at the top when scrolling vertically)

  - Each cell in the table takes up a maximum size of 200px wide and 50px tall (I am open to changing these values based on looks, just want there to be some limit in place on the size of a cell).

  - If no cell in a column is at the maximum cell size value, the size of the cells in the column are set to the size of the biggest cell. (cells are only as large as they have to be)

  - If there is no data in a column, the width of the column is only as big as the width of the header text in that column.

  - If the ReportPortal log expander is clicked, the table should fit within the window. The vertical and horizontal scollbars should be visible.

  - It is not necessary to use the HTML table elements. If the rendered HTML looks like a table, but is made of only <div> tags, that is fine.

  - Alternating the background colors of the rows for readability would be super cool

  - The fewer the amount of tags and text within those tags the better (only use as much HTML and CSS as necessary)
  */
  it('Your attempt at making a table', function() {

    let listOfObjects = [

    ]
    let htmlTable = toHtmlTableNew(listOfObjects);
    logger.info(htmlTable);
  })

  function toHtmlTableNew(arrayOfObject)
  {

  }

});