
    const parent = function(generate) {
        const group = [];
    
        group.push(generate
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => managerCard(manager))
        );
        const managerCard = manager => {
            return `            
            <div class="card">
            <div class='card-header manager'>
                <h3>${manager.getName()}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <div class="card-body">
              <ul class='list-group'> 
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <a class="list-group-item" href="mailto:${manager.getEmail()}">Email</a>
                <li class='list-group-item'>Office #: ${manager.officeNumber()}</li>
              </ul>  
            </div>
          </div>
          `
        }
        
        group.push(generate
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => engineerCard(engineer))
            .join("")
        );
        const engineerCard = function(engineer) {
            return `
            <div class="card">
            <div class='card-header manager'>
                <h3>${engineer.getName()}</h3>
                <h4>${engineer.getRole()}</h4>
            </div>
            <div class="card-body">
              <ul class='list-group'> 
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <a class="list-group-item" href="mailto:${engineer.getEmail()}">Email</a>
                <a class='list-group-item' href="https://github.com/${engineer.getGithub()}">GitHub</a>
              </ul>  
            </div>
          </div>`
        }
    
        group.push(generate
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => InternCard(intern))
            .join("")
        );
        const InternCard = function(intern) {
            return `
            <div class="card">
            <div class='card-header manager'>
                <h3>${intern.getName()}</h3>
                <h4>${intern.getRole()}</h4>
            </div>
            <div class="card-body">
              <ul class='list-group'> 
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <a class="list-group-item" href="mailto:${intern.getEmail()}">Email</a>
                <li class='list-group-item'>School Name: ${intern.getSchool()}</li>
              </ul>  
            </div>
          </div>
            `
        }
       
        return group.join("");
    }
    


        
    module.exports = generate => {

        return `
        <!DOCTYPE html>
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
        <div class="row">
            <div class="card-deck team-area col-12 d-flex justify-content-center">
                ${parent(generate)}
            </div>
        </div>
    </div>
</body>
</html>
        `;
    };