const digital = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let period = 'AM';
    if (hour == 0) hour = 12;

    if (hour > 12){
        hour -= 12;
        period ='PM';
    }

    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    let time = `${hour} : ${minute} : ${second} ${period}`;
    //console.log(time)
    document.getElementById("digital").innerText = time;
    setTimeout(digital, 1000)
   
}

digital();