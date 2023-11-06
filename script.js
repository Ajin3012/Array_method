//////////////////////////////////////////////////////////////////// 
var library = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }]; 

for(let i=0;i<library.length;i++){
	
	if(library[i].readingStatus){
		console.log(`author:${library[i].author}`);
		console.log(`title:${library[i].title}`); 
		console.log(`readingStatus:${library[i].readingStatus}`);
	}
}
/////////////////////////////////////////////////////////////////////////

let obj = { 

foo: { a: "hello", b: "world" }, 

bar: ["example", "mem", null, { xyz: 6 }, 88], 

qux: [4, 8, 12] 

}; 
let result=obj.bar[3].xyz=606;
console.log(obj);


/////////////////////////////////////////////////////////////////////////
const users = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan' 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee' 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte' 

  } 

]; 

let res=users.map((value)=>value.first_name + value.last_name);
console.log(res);

/////////////////////////////////////////////////////////////////////////

const user = [ 

  { 

    first_name: 'Mike', 

    last_name: 'Sheridan', 

    age: 30 

  }, 

  { 

    first_name: 'Tim', 

    last_name: 'Lee', 

    age: 45 

  }, 

  { 

    first_name: 'John', 

    last_name: 'Carte', 

    age: 25 

  } 

]; 

let ans=user.map((value)=>value.last_name);
console.log(ans);

/////////////////////////////////////////////////////////////////////////
const userDatas = [ 
  { 
    first_name: 'Mike', 
    location: 'London' 
  }, 
  { 
    first_name: 'Tim', 
    location: 'US' 
  }, 
  { 
    first_name: 'John', 
    location: 'Australia' 
  } 
]; 
let answer= userDatas.map((e)=>`${e.first_name} lives in ${e.location}`)
console.log(answer);

/////////////////////////////////////////////////////////////////////////

const employees = [ 

  { name: 'David Carlson', age: 30 }, 

  { name: 'John Cena', age: 34 }, 

  { name: 'Mike Sheridan', age: 25 }, 

  { name: 'John Carte', age: 50 } 

]; 

let value=employees.filter((value)=>value.age>30);
console.log(value);


/////////////////////////////////////////////////////////////////////////
const students = [ 

  { name: 'Quincy', grade: 96 }, 

  { name: 'Jason', grade: 84 }, 

  { name: 'Alexis', grade: 100 }, 

  { name: 'Sam', grade: 65 }, 

  { name: 'Katie', grade: 90 } 

]; 

let mark=students.filter((value)=>value.grade>=90);
console.log(mark)

/////////////////////////////////////////////////////////////////////////
let userss = [ 

    { name: 'John', age: 25, occupation: 'gardener' }, 

    { name: 'Lenny', age: 51, occupation: 'programmer' }, 

    { name: 'Andrew', age: 43, occupation: 'teacher' }, 

    { name: 'Peter', age: 81, occupation: 'teacher' }, 

    { name: 'Anna', age: 47, occupation: 'programmer' }, 

    { name: 'Albert', age: 76, occupation: 'programmer' }, 

] 

let name=userss.filter((value)=>value.occupation=="programmer");
console.log(name);
