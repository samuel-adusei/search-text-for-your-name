var text = "samuel samuel"
var myName = "samuel"
var hits = []

for(var i=0; i<text.length; i++)
    {
        if (text[i] === text[0])
        {
           for( var j=i;j < i + myName.length;j++)
           {
               hits.push(text[j]);
           }
        }
    }
	
	if(	hits.length === 0); {
		console.log("Your name is wasnt found");
	}else{
		console.log(hits);
	}