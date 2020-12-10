function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    let check_url = Client.checkForName(formText);
    if(check_url){

        console.log("check_url is here working");
        // fetch the url  
       fetch('http://localhost:8081/testAPI',{
       
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:formText}),
        })
        .then(response => response.json())
        .then(function(response){
        console.log(" Print The response I want be sure !!", response);
        document.getElementById("agreement").innerHTML = ` agreement${response.agreement}`;
        document.getElementById("subjectivity").innerHTML = `subjectivity ${response.subjectivity}`;
        document.getElementById("confidence").innerHTML = ` confidence${response.confidence}`;
        
       

        })
    }
        else{
        console.log("Please Enter a valid Url Like This ( https://en.wikipedia.org/wiki/Jeddah ) Thanks !");
        }
}

// Done 



import {checkForName} from './nameChecker';
export { handleSubmit }


