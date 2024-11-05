// let firstName=prompt("Enter your first name");
// let lastName=prompt("Enter your last name");
// let confirmation=confirm("18 dan kattamisan?"); 
// const check=confirmation ? "Siz 18 dan katta":"Siz 18 dan kichik";
// console.log(firstName , lastName, check , confirmation);
// console.log("Hello World"); 

// let name="Sardorbek";

// console.log(name);



// let a="15";
// let b=5;
// const check=(a+b);

// console.log(check);

//let 
// let a=15;
// a=16;
// a=52;
// console.log(a);
// var
// a=16;//hosting
// let a=15;
// console.log(a);

// const birthDate=2003;
// birthDate=2006;
// console.log(birthDate);

// const a=;
// console.log(typeof a);

// let a = 5;
// let b = 3;
// let sum = a + b; // 8
// let difference = a - b; // 2
// let product = a * b; // 15
// let quotient = a / b; // 1.66667
// let remainder = a % b; // 2
// let power = a ** b; // 125
// console.log(sum, difference, product, quotient, remainder, power);
// console.log(15%4);

// console.log(5 == '5'); //true
// console.log("5" === '15');//false
// console.log(5 != '5'); //false
// console.log(5 !== '5');//true
// console.log(5 > 3); 
// console.log(5 < 3); 

// let a=true;
// console.log(typeof !a);

// let a = false;
// let b = false;
// console.log(a && b); 
// console.log(a || b); 
// console.log(!a); 


// console.log(5 & 3); // 1
// console.log(5 | 3); // 7
// console.log(5 ^ 3); // 6
// console.log(~5); // -6
// console.log(6 << 1); // 10
// console.log(5 >> 2); // 2

// let a=5;
// console.log(a+=1);
// let a = 5;
// a += 3; // 8 a=a+3;
// a -= 2; // 6
// a *= 2; // 12
// a /= 4; // 3
// // a %= 2; // 1
// console.log(a);


// const a = 3; // Same as 4 ** (3 ** 2); evaluates 
// const b = 4; // Same as (4 / 3) / 2; evaluates to]\
// // console.log(typeof(typeof (typeof((typeof (typeof a)+b))+typeof b)>5));
// let b="hello";
// console.log((b += ' world'));


// let baz = true;
// baz += 1; // 2
// let b=(true += false); // 2
// console.log(b);

// let a=false;
// console.log(a);
// let x = 5;
// let y = 10;
// let z = 25;
// x = y;  
// x= (y = z); 
// console.log(x, y, z);
// 4-dars homework yechim
// const athamMass=78;
// const athamHeight=1.69;
// const sardorMass=78;
// const sardorHeight=1.69;

// const adhamBMI=(athamMass/athamHeight**2);
// const sardorBMI=(sardorMass/sardorHeight**2);

// const markHigherBMI =(adhamBMI>sardorBMI);
// console.log(markHigherBMI);

// let ism = "Sardorbek";
// let salomlashish = "Assalamu alaykum , " + ism + "   !";
// console.log(salomlashish);

// let name1="Temurbek",
// name2="ishingni tez bitir";
// console.log(name1+" "+name2);


// let ism = "Sardorbek";
// let yosh = 25;
// let salomlashish = `Asslamu alaykum, mening ismim ${ism} va men ${yosh} yoshdaman.`;
// console.log(salomlashish);

// let name1="Temurbek";
// let name2="ishingni tez bitir";
// console.log(`Assalamu o alaykum sening isming ${name1}`);

// let o='O\''
// console.log(o);

// let string="qanday guzal bu \nolam"
// console.log(string);

// let string = `qanday guzal bu  olam`
// console.log(string);

// Oddiy string bilan
// let oddiyMatn = "Bu birinchi qatordir.\nBu ikkinchi qatordir.";
// console.log(oddiyMatn);
// // Template literal bilan
// let koPqatOrliMatn = `Bu birinchi qatordir.
// Bu ikkinchi qatordir.`;
// console.log(koPqatOrliMatn);

// let a = 10;
// let b = 5;
// console.log(`10 : 5 = ${a / b}`);

// let ism = "Sardorbek";
// let fan = "JavaScript";
// let vaqt = 3;

// let xabar = `Assalamu alaykuum, ${ism}! Siz ${fan} fanini ${vaqt} oydan beri o‘rganmoqdasiz. Zo‘r ish!`;
// console.log(xabar);

// Natija: Salom, Sardorbek! Siz JavaScript fanini 3 oydan beri o‘rganmoqdasiz. Zo‘r ish!

// let yosh = prompt("Yoshingizni kiriting");

// if (yosh >= 18) {
//   console.log("Sizga ruxsat beriladi.");  // Shart rost bo'lgani uchun bu ishga tushadi.
// }else {
//   console.log("Kirish taqiqlanadi.");
// }
// let yosh2 = 16;
// let xabar = yosh2 >= 18 ? "Kirish ruxsat" : "Kirish taqiqlangan";
// console.log(xabar);  // Natija: Kirish taqiqlangan
// let baho = 85;

// if (baho >= 90) {
//   console.log("A'lo baho");
// } else if (baho >= 70) {
//   console.log("Yaxshi baho");
// } else {
//   console.log("Yana urinib ko'ring");
// }
// let age=8;
// let natija = age>10 ? "Shart rost" : "Shart yolg'on";
// console.log(natija);

let data=prompt("Havo haroratini kiriting");

if(0<data<10){
    alert(`Siz kiritgan son ${data} toq son`)
}else{
    alert(`Siz kiritgan son ${data} juft son`)
}


