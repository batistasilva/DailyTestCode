
function myFunction() {
    var d = new Date();
    var n = d.toLocaleString([], { 
        hour: '2-digit', minute: '2-digit' 
    });
    console.log(n);
}

function fullDateTime() {
    var d = new Date(); 
    var n = d.toLocaleString([], { 
        hour12: true
    });
    
    console.log(n);
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

//console.log(formatAMPM(new Date('07:05:45PM')));

function timeConversion(s) {
  var time = s.toLowerCase().split(':');
  console.log(time);  
    //
  var hours = parseInt(time[0]);
  var _ampm = time[2];
  console.log(_ampm); 
  //if found, hour is for day  
  if (_ampm.indexOf('am') != -1 && hours == 12) {
    time[0] = '00';
  }
  //if found, hour is for night
  if (_ampm.indexOf('pm')  != -1 && hours < 12) {
    time[0] = hours + 12;
  }
  return time.join(':').replace(/(am|pm)/, '');
}


function timeConversion2(strtime) { 
    var time = strtime.match(/\d{2}/g);
    //
    if (time[0] === "12") time[0] = "00";
    if (strtime.toLowerCase().indexOf("pm") > -1) time[0] = parseInt(time[0])+12;
    //
    return time.join(":");    
}

//timeConversion('07:05:45PM');
timeConversion('07:05:45PM');
//myFunction();
//fullDateTime();
//DateTime3();