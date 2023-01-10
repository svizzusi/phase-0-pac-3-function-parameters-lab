const first = "Aki";
let responce;

function introduction(first){
    responce = (`Hi, my name is ${first}.`);
    return responce;
}
introduction(first);
console.log (`${responce}`);


const name = "Aki";
const language = "Ember.js";
let intro;

function introductionWithLanguage (name, language){
    intro = (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return intro;
}
introductionWithLanguage(name, language);
console.log (`${intro}`);


const fName = "Gracie";
let fLanguage;
let fIntro;

function introductionWithLanguageOptional (fName, fLanguage = "JavaScript"){
    fIntro = (`Hi, my name is ${fName} and I am learning to program in ${fLanguage}.`);
    return fIntro;
}
introductionWithLanguageOptional(fName, fLanguage);
console.log (`${fIntro}`);