//js task 1
//partha

var userObjArray=[];
var user={
    name: "name1",
    dob: 21/10/1988,
    address: {
     street: "line1",
     landmark: "line2",
     city: "city1"
    }};

var j=0;

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime() ) );
};



var moment = require('moment');

for(i=0;i<21;i++)
	{
	 user.name="name"+(i);	
	 
   	if(i%5==0) user.city="city"+j++;
    else user.city="city"+j;
    var dateVar = randomDate(new Date(1970, 0, 1),new Date(2000, 0, 1));
    var dateOfBirth=dateVar.getDate()+"/"+(dateVar.getMonth()+1)+"/"+dateVar.getFullYear();
    //console.log(dateOfBirth);
    user.dob=dateOfBirth;
    /*if (((new Date() - dateVar) / 1000 / 60 / 60 / 24 / 365.25).toPrecision(2)>30)
        console.log("username : "+user.name);*/


        if(moment().diff(dateVar, 'years')>30)
        console.log(user.name + ":" + moment().diff(dateVar, 'years')+" years");


        //new object required before each push to array so that all the objects dont point to the same memory 
    var user=new Object(); 
    userObjArray.push(user);
		//console.log(userObjArray.length+":"+userObjArray[i].name+":"+userObjArray[i].city);
  }
 

/*for(i=0;i<20;i++)
  console.log(userObjArray[i].name+":"+userObjArray[i].city+":"+userObjArray[i].dob);
*/


var branchObjArray=[];
var branch={
    name: "branch",
    address : "address"
};

for(i=0;i<8;i++)
  { branchObjArray.push(branch);
  var branch=new Object();
  branchObjArray[i].name="branch"+(i+1);
  branchObjArray[i].address="address"+i;
  //console.log(branchObjArray[i].name+":"+branchObjArray[i].address);
}


/*for(i=0;i<branchObjArray.length;i++)
  console.log(branchObjArray[i].name+":"+branchObjArray[i].address)*/


/*for(i=0;i<4;i++)
  {user.branchKey="branchValue";
  console.log(user.branchKey);}*/


var cityBranchObjArray=[];
var city={
  name : "city",
  branchName : "branchName"
};


for(i=0,j=1;i<4;i++)
  { cityBranchObjArray.push(city);
    var city=new Object();
    cityBranchObjArray[i].name="city"+(i+1);
    for(x=0;x<2;x++) {cityBranchObjArray[i].branchName="branchName"+(j++);   //use a independent variable to take care of the increment in the variable
      //console.log(cityBranchObjArray[i].name+":"+cityBranchObjArray[i].branchName);
      } 
  }


/*console.log("length : "+userObjArray.length);



var name="";

console.log(cityBranchObjArray.length);*/

var k=0;

for(i=0;i<userObjArray.length;i++)
  { for(j=0;j<4;j++)
      {if(userObjArray[i].city == cityBranchObjArray[j].name)
        { /*userObjArray.push(user);
          var user=new Object;*/
          if(i%3==0) userObjArray[i].branch="branchName"+k++;
          else userObjArray[i].branch="branchName"+k;
          //console.log(userObjArray[i].name+":"+userObjArray[i].city+":"+userObjArray[i].branch);
          }

      //else console.log("false"+":"+userObjArray[i].name);
    }

      
      
    }

/*
for(i=0;i<userObjArray.length-1;i++)
  console.log(userObjArray[i].name+":"+userObjArray[i].branch)*/





//===================================== END =========================================



/*var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/

/*rl.question("^Xat do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});*/
