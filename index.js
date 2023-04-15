var seconds= prompt("Enter the seconds:");
// Check if the user input is a valid 
if(isNaN(seconds))
{
    console.log("Please Enter the valid input");
}
else{
    // Convert seconds to minutes and seconds
    var minutes=Math.floor(seconds/60);
    var remainingSeconds = seconds % 60;
    console.log("Time: " + minutes + " minutes and " + remainingSeconds + " seconds");
}
