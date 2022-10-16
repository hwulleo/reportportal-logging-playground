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

});