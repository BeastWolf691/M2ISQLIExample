const x = "zzz"
let founded = false;
let counter = 0;

for (let i = 0; i < 26; i++) {
    if(founded) break;
    for (let j = 0; j < 26; j++) {
       if(founded) break;
       for (let k = 0; k < 26; k++) {
          counter++;
          const result = [k, j, i].map(value => String.fromCharCode(value + 97))/*97 car equivaut au a minuscule */
          if(result.join("") === x) {
             founded = true;
             console.log(result.join("") + " founded in", counter, "try")
          }
          if(founded) break;
       }
    }
}