const EventEmitter=require("events");
const events = new EventEmitter(); 


events.on("MyDetails",()=>
{
    console.log("My Name is sayan KOlay");
});


events.on("MyDetails",()=>
{
    console.log("I am from Ghatal,West Bengal");
});

events.on("MyDetails",()=>
{
    console.log("Completed MCA from Vidyasagar University...");
});

events.emit("MyDetails");