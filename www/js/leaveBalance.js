
 
    var count1 = 0;
    var start1;
    var end1;    

        

    function leaveprevioustable() {

        var leave_data = [  
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"LWP",
			   "Opening":0.00,
			   "Availed":0.00,
			   "Closing":0.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"CO",
			   "Opening":9.00,
			   "Availed":2.00,
			   "Closing":7.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"PL",
			   "Opening":35.50,
			   "Availed":3.50,
			   "Closing":46.41
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"LWP",
			   "Opening":0.00,
			   "Availed":0.00,
			   "Closing":0.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"CO",
			   "Opening":9.00,
			   "Availed":2.00,
			   "Closing":7.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"PL",
			   "Opening":35.50,
			   "Availed":3.50,
			   "Closing":46.41
			}
		 ]

        var start1 = count1 > 0 ? 5 * count1 : count1;
        var end1 = start1 + 5;
        var strtable="";
        var i;
        var flag=0;
        $("#showData").empty();

        for (i = start1; i < end1; i++) {
          if(i>=leave_data.length){
             flag=1;
             break;
           }
          if(flag==0){
            strtable+="<tr>";
            strtable+="<td class='label-cell'>"+leave_data[i].LeaveType+"</td>";
            strtable+="<td class='numeric-cell'>"+leave_data[i].Opening+"</td>";
			strtable+="<td class='numeric-cell'>"+leave_data[i].Availed+"</td>";
			strtable+="<td class='numeric-cell'>"+leave_data[i].Closing+"</td>";
			
            strtable+="</tr>";
            
            
          }
          console.log(leave_data[i].Date);
           
        }

         if(strtable != ''){
                $("#leaveData").append(strtable);
             }
        if(flag==1){
             $('#leaveData').append("<tr><td colspan='3'>No More Leaves</td></tr>");
        }
         
        //  console.log(attendance_data.length);
           console.log(end);

           console.log(count);
           if(i<=leave_data.length)
           {

            count1++;
         
           }
           console.log(count1);

    }
 

    // function leavenexttable() {
    //   console.log(count);
    //   if(count>1)
    //   {

    //    count--;
    
    //   }
    // console.log(count);
 

    //     var leave_data =[  
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"LWP",
	// 		   "Opening":0.00,
	// 		   "Availed":0.00,
	// 		   "Closing":0.00
	// 		},
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"CO",
	// 		   "Opening":9.00,
	// 		   "Availed":2.00,
	// 		   "Closing":7.00
	// 		},
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"PL",
	// 		   "Opening":35.50,
	// 		   "Availed":3.50,
	// 		   "Closing":46.41
	// 		}, 
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"LWP",
	// 		   "Opening":0.00,
	// 		   "Availed":0.00,
	// 		   "Closing":0.00
	// 		},
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"CO",
	// 		   "Opening":9.00,
	// 		   "Availed":2.00,
	// 		   "Closing":7.00
	// 		},
	// 		{  
	// 		   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
	// 		   "GlobalID":"443986",
	// 		   "LeaveType":"PL",
	// 		   "Opening":35.50,
	// 		   "Availed":3.50,
	// 		   "Closing":46.41
	// 		}
	// 	 ]

    //        start = count > 0 ? 5 * (count-1) : count;
    //        end = start + 5;

    //     var strtable="";
    //     var i;
    //     var flag=0;
    //     $("#showData").empty();

    //     for (i = start; i < end; i++) {
    //       if(i>=attendance_data.length){
    //          flag=1;
    //          break;
    //        }
    //       if(flag==0){
    //         strtable+="<tr>";
    //         strtable+="<td class='label-cell'>"+attendance_data[i].Date+"</td>";
    //         strtable+="<td class='numeric-cell'>"+attendance_data[i].InTime+"</td>";
    //         strtable+="<td class='numeric-cell'>"+attendance_data[i].OutTime+"</td>";
    //         strtable+="</tr>";
            
            
    //       }
    //       console.log(attendance_data[i].Date);
           
    //     }

    //      if(strtable != ''){
    //             $("#showData").append(strtable);
    //          }
    //     if(flag==1){
    //          $('#showData').append("<tr><td colspan='3'>No Data</td></tr>");
    //     }
         
    //     //  console.log(attendance_data.length);
    //        console.log(end);
           

    // }
 




function getYear(){
		$('#yearselect').yearselect({
		  start: 2017,
		  end: 2018,
		  step:1,
		  order: 'desc',
		  selected: 2016,
		  formatDisplay: function(yr) { return yr }
		});
}



