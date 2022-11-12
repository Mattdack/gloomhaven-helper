// Handlebars.registerHelper('eachUnique', function(array, options) {
//     // this is used for the lookup
//     var  dupCheck = {};
//     // template buffer
//     var buffer = '';
//     for( var i=0; i< array.length; i++){
//       var entry = array[i];
//       var uniqueKey = entry.name + entry.level;
//       // check if the entry has been added already
//       if(!dupCheck[uniqueKey]){
//         // here there are only unique values
//         dupCheck[uniqueKey] = true;
//         // add this in the template
//         buffer += options.fn(entry);
//       }
//     }
//     // return the template compiled
//     return buffer;
//   });

// function filterDuplicates(array){
//     // this will hold the new filtered dictionary
//     var uniqArray  = [],
//     // this is used for the lookup
//         dupCheck = {};
//     for( var i=0; i< array.length; i++){
//       var entry = array[i];
//       var uniqueKey = entry.name + entry.level;
//       if(!dupCheck[uniqueKey]){
//         // here there are only unique values
//         dupCheck[uniqueKey] = true;
//         uniqArray.push(entry);
//       }
//     }
//     return uniqArray;
//   }
  
//   var source = $("#template").html();
//   var template = Handlebars.compile(source);
//   var igListOrig = [...];
  
//   $('body').append(template(filterDuplicates(igListOrig)));



//   Turn Order: Clear Input
const clearBtn = document.getElementById("clearInput");
clearBtn.addEventListener("click", event => {
  event.preventDefault();
  console.log("buttonclick")
  document.getElementById("turnorders").reset();
})

// health bar monsters --------
const plusHP = document.querySelectorAll('.plusHP');
console.log("IncreaseHP");
for (let i = 0; i < plusHP.length; i++) {
    plusHP[i].addEventListener("click", event => {
        event.preventDefault();
        const mhealthSpan = event.target.parentElement.children[3].children[1]
        console.log(mhealthSpan)
        console.log(parseInt(mhealthSpan))
        mhealthSpan.innerText = parseInt(mhealthSpan.innerText) + 1;
    })
}
const minusHP = document.querySelectorAll('.minusHP');
console.log("DecreaseHP");
for (let i = 0; i < plusHP.length; i++) {
    minusHP[i].addEventListener("click", event => {
        event.preventDefault();
        const mhealthSpan = event.target.parentElement.children[3].children[1]

        mhealthSpan.innerText = parseInt(mhealthSpan.innerText) - 1;
    })
}

// health bars players-----------
const plusCHP = document.querySelectorAll('.plusCHP');
for (let i = 0; i < plusCHP.length; i++) {
    plusCHP[i].addEventListener("click", e => {
        e.preventDefault();
        const chealthSpan = e.target.parentElement.children[0]

        chealthSpan.innerText = parseInt(chealthSpan.innerText) + 1;
    })
}

const minusCHP = document.querySelectorAll('.minusCHP');
for (let i = 0; i < minusCHP.length; i++) {
    minusCHP[i].addEventListener("click", e => {
        e.preventDefault();
        const chealthSpan = e.target.parentElement.children[0]

        chealthSpan.innerText = parseInt(chealthSpan.innerText) - 1;
    })
}

//  XP bar characters =====================
const plusXP = document.querySelectorAll('.plusXP');
for (let i = 0; i < plusXP.length; i++) {
    plusXP[i].addEventListener("click", e => {
        e.preventDefault();
        const cxpspan = e.target.parentElement.children[0]

        cxpspan.innerText = parseInt(cxpspan.innerText) + 1;
    })
}

const minusXP = document.querySelectorAll('.minusXP');
for (let i = 0; i < minusXP.length; i++) {
    minusXP[i].addEventListener("click", e => {
        e.preventDefault();
        const cxpspan = e.target.parentElement.children[0]

        cxpspan.innerText = parseInt(cxpspan.innerText) - 1;
    })
}