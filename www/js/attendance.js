//  function loadAttendance(){
//   alert("hello");
      
// }

    function CreateTableFromJSON() {

        var attendance_data = [
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              },
              {
                "Date": "04/09/2017",
                "InTime": "09:23:00",
                "OutTime": "18:28:00"
              }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < 5; i++) {
            for (var key in attendance_data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                    console.log(key);
                }
            }
        }
        // console.log(col.length);
        // console.log(attendance_data.length);

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            $('th').addClass('numeric-cell')
                 // TABLE HEADER.
             // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < 5; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = attendance_data[i][col[j]];
            }
        }

        // $("#loadMore").on('click', function(e) {
        //   e.preventDefault();

        //   $(".numeric-cell").slice(0,5).slideDown();
        //   if($(".numeric-cell").length==0){
        //     $("#load").fadeOut('slow');
        //   }


        // });

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML ='';
        divContainer.appendChild(table);
    }

