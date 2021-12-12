const inquirer = require('inquirer')
const fs = require('fs');
const Manager = require('./lib/manager');
let employeeArray = []
let cards = ``
addEmployee()
function makeManager() {
    inquirer.prompt([
        {

            message: 'What is your name?',
            name: 'name',
            type: 'input',
        },
        {
            message: 'What is your Employee ID?',
            name: 'id',
            type: 'input',
        },
        {
            message: 'What is your email?',
            name: 'email',
            type: 'input',
        },
        {
            message: 'What is your Manager Office Number?',
            name: 'officeNumber',
            type: 'input',
        }
    ]).then(info => {
        let manager = new Manager(info.name, info.id, info.email, info.officeNumber)
        employeeArray.push(manager)
        anotherEmp()
    })

}

function addEmployee() {
    inquirer.prompt({
        message: 'what is your Role?',
        name: 'role',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"],
    }).then(data => {

        switch (data.role) {
            case "Manager":
                makeManager()
                break;
            case "Engineer":

                break;
            case "Intern":

                break;


        }
    })
}

function anotherEmp() {

    inquirer.prompt({

        message: 'Do you want to add another Employee?',
        name: 'boolean',
        type: 'list',
        choices: ['Yes', 'No']
    }).then(again => {

        if (again.boolean == 'Yes') {
            addEmployee()
        } else writeHtml()
    })

}

function writeHtml() {

    for (let i = 0; i < employeeArray.length; i++) {
        switch (employeeArray[i].getRole()) {
            case "Manager":

                cards += `<div class="card-header">
        <h2 class="card-title">${employeeArray[i].getName()}</h2>
        <h3 class="card-title"><i class="fas mr-2"></i>${employeeArray[i].getRole()}</h3> 
        
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employeeArray[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></li>
            <li class="list-group-item">Office number: ${employeeArray[i].getOfficeNumber()}</li>
        </ul>
    </div>`
                break;
            case "Engineer":
                // engineer card
                cards += `<div class="card-header">
                <h2 class="card-title">${employeeArray[i].getName()}</h2>
                <h3 class="card-title"><i class="fas mr-2"></i>${employeeArray[i].getRole()}</h3> 
                
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employeeArray[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${employeeArray[i].getgithub()}</li>
                </ul>
            </div>`
                break;

            case "Intern":
                // intern card

                cards += `<div class="card-header">
        <h2 class="card-title">${employeeArray[i].getName()}</h2>
        <h3 class="card-title"><i class="fas mr-2"></i>${employeeArray[i].getRole()}</h3> 
        
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employeeArray[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></li>
            <li class="list-group-item">Office number: ${employeeArray[i].getschool()}</li>
        </ul>
    </div>`
                break;
        }
    }

    fs.writeFile(`index.html`, `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
           ${cards}
    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
        `, err => console.log(err))
}





// inquirer.prompt([{

//     message: 'What is your name?',
//     name: 'name',
//     type: 'input',
// },
// {
//     message: 'what is your Role?',
//     name: 'role',
//     type: 'list',
//     choices: ["Manager", "Engineer", "Intern"],
// },
// {
//     message: 'What is your Employee ID?',
//     name: 'id',
//     type: 'input',
// },
// {
//     message: 'What is your email?',
//     name: 'email',
//     type: 'input',
// },
// {
//     message: 'What is your Manager Office Number?',
//     name: 'officeNumber',
//     type: 'input',
// },
// {
//     message: 'What is your Github User name?',
//     name: 'github',
//     type: 'input',

// },
// {
//     message: 'Which school do you attend?',
//     name: 'school',
//     type: 'input',
// },

// ])
//     .then((answers) => {

//         let employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
//         employeeArray.push(employee)
//         for (let i = 0; i < employeeArray.length; i++) {
//             switch (employeeArray[i].getRole()) {
//                 case "Manager":

//                     cards += `<div class="card-header">
//             <h2 class="card-title">${employeeArray[i].getName()}</h2>
//             <h3 class="card-title"><i class="fas mr-2"></i>${employeeArray[i].getRole()}</h3> 
            
//         </div>
//         <div class="card-body">
//             <ul class="list-group">
//                 <li class="list-group-item">ID: ${employeeArray[i].getId()}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].getEmail()}">${employeeArray[i].getEmail()}</a></li>
//                 <li class="list-group-item">Office number: ${employeeArray[i].getOfficeNumber()}</li>
//             </ul>
//         </div>`
//                     break;
//                 case "Engineer":
//                     // engineer card
//                     break;

//                 case "Intern":
//                     // intern card
//                     break;
//             }
//         }

//         console.log(cards)
//         console.log(employeeArray)

//         fs.writeFileSync(`index.html`, `<!DOCTYPE html>
//         <html lang="en">

//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//             <title>My Team</title>
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//                 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//             <link rel="stylesheet" href="style.css">
//             <script src="https://kit.fontawesome.com/c502137733.js"></script>
//         </head>

//         <body>
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-12 jumbotron mb-3 team-heading">
//                         <h1 class="text-center">My Team</h1>
//                     </div>
//                 </div>
//             </div>
//             <div class="container">
//                 <div class="row">
//                     <div class="team-area col-12 d-flex justify-content-center">
//                     <div class="card employee-card">
//             <div class="card-header">
//                 <h2 class="card-title">${answers.role}</h2>
//                 <h3 class="card-title"><i class="fas mr-2"></i>${answers.role}</h3> 

//             </div>
//             <div class="card-body">
//                 <ul class="list-group">
//                     <li class="list-group-item">ID: ${answers.id}</li>
//                     <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
//                     <li class="list-group-item">Office number: ${answers.officeNumber}</li>
//                 </ul>
//             </div>
//         </div>
//                     </div>
//                 </div>
//             </div>
//         </body>
//         </html>
//             `)
//     })
//     .catch((error) => {
//         console.log(error)

//     });

//   const generateTeam = team => {

      // create the answers html

      //fa-mug-hot 


    // const generateManager = manager => {
        // return `
    //     <div class="card employee-card">
    //     <div class="card-header">
    //         <h2 class="card-title">${manager.getName()}</h2>
    //         <h3 class="card-title"><i class="fas mr-2"></i>${manager.getRole()}</h3> 

    //     </div>
    //     <div class="card-body">
    //         <ul class="list-group">
    //             <li class="list-group-item">ID: ${manager.getId()}</li>
    //             <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    //             <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    //         </ul>
    //     </div>
    // </div>
    //     `;
    // };


// }

// export function to generate entire page
// team => {

// return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>My Team</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
//     <script src="https://kit.fontawesome.com/c502137733.js"></script>
// </head>

// <body>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-12 jumbotron mb-3 team-heading">
//                 <h1 class="text-center">My Team</h1>
//             </div>
//         </div>
//     </div>
//     <div class="container">
//         <div class="row">
//             <div class="team-area col-12 d-flex justify-content-center">
//                 ${generateTeam(team)}
//             </div>
//         </div>
//     </div>
// </body>
// </html>
//     `;
// };