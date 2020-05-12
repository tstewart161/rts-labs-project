export function timeElapsedSincePosted(createdDate) {
    const milliseconds = {
        seconds: 1000,
        minutes: (1000)*60,
        hours: (1000*60)*60,
        days: (1000*60*60)*24,
        months: (1000*60*60*24)*30,
        years: (1000*60*60*24*30)*12
    }

    let createdTimeStamp = new Date(createdDate);
    let currentTimeStamp = Date.now();
    let elapsedTime = currentTimeStamp - createdTimeStamp;

    if (elapsedTime/milliseconds.seconds < 60) {
        return `Posted ${Math.floor(elapsedTime/milliseconds.seconds)} second(s) ago`
    }
    else if (elapsedTime/milliseconds.minutes < 60) {
        return `Posted ${Math.floor(elapsedTime/milliseconds.minutes)} minute(s) ago`
    }
    else if (elapsedTime/milliseconds.hours < 24) {
        return `Posted ${Math.floor(elapsedTime/milliseconds.hours)} hour(s) ago`
    }
    else if (elapsedTime/milliseconds.days < 30) {
        return `Posted ${Math.floor(elapsedTime/milliseconds.days)} day(s) ago`
    }
    else if (elapsedTime/milliseconds.months < 12) {
        return `Posted ${Math.floor(elapsedTime/milliseconds.months)} month(s) ago`
    }
    else {
        return `Posted ${Math.floor(elapsedTime/milliseconds.years)} year(s) ago`
    }
}