let value;

const now = new Date(); //şu anki zaman

const date1 = new Date("11-02-1999 09:15:02");

const date2 = new Date("November 02 1999");

const date3 = new Date("11/02/1999");

value = date1;

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();


date1.setMonth(9);
date1.setDate(13);
date1.setFullYear(1990);
date1.setHours(03);
date1.setMinutes(16);




value = date1;




console.log(value);