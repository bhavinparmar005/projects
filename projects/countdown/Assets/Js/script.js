let day = document.getElementById("day_display"); 
let hours =document.getElementById("hours_display");
let minutes = document.getElementById("minutes_display");
let second = document.getElementById("second_display");





// let targetDate = new Date("2024-11-30");

// let current = new Date();

// let difference = Math.floor(targetDate -current);

// let finalDifference= difference/1000;

// let minute = finalDifference / 60;
//  let hour = minute /60;

// // let dayLeft =  Math.floor(difference / (1000 * 60 * 60 * 24));
// let dayLeft =  Math.floor(finalDifference / ( 60 * 60 * 24));



setInterval(()=>{
    
    let targetdate = new Date("2024-12-10,10:00:00");

    let currentDate =new Date().getTime();

    let difference = targetdate - currentDate;

    let leftDay =Math.floor(difference /(1000*60*60*24));
    let leftHour = Math.floor(difference %(1000*60*60*24) / (1000*60*60));
    let leftMinute = Math.floor(difference %(1000*60*60) / (1000*60));
    let leftSeconds = Math.floor(difference % (1000*60)/(1000));


     
   
    if( leftSeconds < 10){
        second.textContent = "0"+ leftSeconds;
    }else{
        second.textContent = leftSeconds;
    }

    if(leftMinute <10){
        minutes.textContent = "0" + leftMinute;
    }else{
        minutes.textContent = leftMinute;
    }
    if(leftHour <10){
        hours.textContent = "0" + leftHour;
    }else{
        hours.textContent = leftHour;
    }
    if(leftDay <10){
        day.textContent = "0" + leftDay;
    }else{
        day.textContent = leftDay;
    }
   
 
    console.log(`
        targetdate :- ${targetdate}
        current date :- ${currentDate}
        displayDay :- ${leftDay}
        displayHour :- ${leftHour}
        displayMinute :- ${leftMinute}
        displaySecond :- ${leftSeconds}
        `);

},1000);



// console.log(`
//     targetDate :- ${targetDate},
//     current :- ${current},
//     finalDifference in second :- ${Math.floor(finalDifference)},
//     minute left :-${Math.floor(minute)},
//     hour left :- ${Math.floor(hour)},
//     dayLeft:-${dayLeft}
   
//     `);


