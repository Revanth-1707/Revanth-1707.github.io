var names=new Array();
names[0]="jim";
names[1]="Ram";
names[2]="Jen";
names[3]="sameer";
names[4]="Rakesh";
names[5]="frank";
names[6]="larry";
names[7]="bhanu";
names[8]="prashant";
names[9]="Yaakov";


for (var k = 0; k < names.length; k++) {
	if(names[k].charAt(0)==='J'|| names[k].charAt(0)==='j'){
        console.log("Goodbye "+ names[k])
	}
	else{
		console.log("Hello "+ names[k])
	}
}