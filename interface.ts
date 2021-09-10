interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string,
    previousClub?:string[]
}
const messi : Player={
    name:"L. Messi",
    club:"PSG",
    salary:120000,
    wife:"Nosimon Ara Regum"
}
const hannan : Player={
    name:"A. Hannan",
    club:"PSG",
    salary:120000,
}
interface Employee{
    fullName:string,
    designation:string,
    salary:number,
    age:number
}
interface Developer extends Employee{
    language:string[],
    codeEditor:string,
    typingSpeed:number
}
const zuku:Developer={
    fullName:"mark Zukerberg",
    designation:"CEO",
    salary:200000,
    age:25,
    language:['C','C++','JS'],
    codeEditor:'VS code',
    typingSpeed:65
}