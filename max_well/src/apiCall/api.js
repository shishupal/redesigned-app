import axios from "axios";

 async function fetchBookListApi(){
    const response = await axios.get("http://localhost:3001/books");
    return response.data;
    
}

async function fetchURLList(){
    const response = await axios.get("http://localhost:3001/v1");
    return response.data;
    
}



async function updateURL(id){

    if(id==="amazon-status"){
        const response = await axios.put(`http://localhost:3001/v1/${id}`,{
        "date": Date.now(),
         "url": "https://www.amazon.com",
         "statusCode": 200,
      "duration": 273
    });
        return  response.data;
    }
     else{
        const response = await axios.put(`http://localhost:3001/v1/${id}`,{
            "date": Date.now(),
             "url": "https://www.google.com",
             "statusCode": 200,
             "duration": 150
        });
        return  response.data;
    }
   
    
}


export  {fetchURLList, updateURL} 