const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})





app.get('/api/numbers', (req, res) => {  
    const numbers = [1, 3, 7, 42, 99];
    res.json(numbers);
});  
 
  
 //Response
//[1, 3, 7, 42, 99]


app.get('/api/users', (req, res) => {  
    const users = [  
        { "name": "Alice", "age": 30, "occupation": "Engineer" },  
        { "name": "Bob", "age": 25, "occupation": "Designer" }  
    ];  
    res.json(users);  
});
//Response  
//{ "name": "Alice", "age": 30, "occupation": "Engineer" },  
//{ "name": "Bob", "age": 25, "occupation": "Designer" }  

// Programming Language API  
app.get('/api/languages', (req, res) => {  
    const languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];  
    res.json(languages);  
});  



