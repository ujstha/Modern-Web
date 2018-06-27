//for footer 
//getting realtime date

//new date call
function renderTime(){
    var today = new Date();
    //for day year month and day
    var year = today.getFullYear();
    if(year < 1000){

    	year +=1900;

    }
    var month = today.getMonth();
    var day = today.getDay();
    var date = today.getDate();
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var monthArray= new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    //for time, hours min and sec

    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    if(hour == 24){
        	
            hour=0;

        } else if(hour > 12){

        	hour= hour-0;

        }

    if(hour<10){

        hour="0"+hour;

    }

    if(min<10){

        min="0"+min;

    }
        	
    if(sec<10){

        sec="0"+sec;

    }

    document.getElementById('todayDate').innerHTML = ("&copy Ujjawal Shrestha" + "<br>" + dayArray[day] + " " + date + " " + monthArray[month] + ", " + year + " | " + hour + ":" + min + ":" + sec);

    setTimeout("renderTime()", 1000);
}

renderTime();//calling the function

