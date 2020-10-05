
    const parent = team => {
        console.log(team)
        const managerCard = manager => {
            return ``
    
    
    
        }
    
        const engineerCard = function() {
            console.log()
        }
    
        const InternCard = function() {
            console.log()
        }
       
        
        const html = [];
    
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => managerCard(manager))
        );
        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            .join("")
        );
    
        return html.join("");
    }
    


        
    module.exports = team => {

        return `
        <!DOCTYPE html>
        <html lang="en">
      
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Portfolio Demo</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css">
        </head>
      
        <body>
          <header>
            <div class="container flex-row justify-space-between align-center py-3">
              <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
          </header>
          <main class="container my-5">
                ${parent(team)}
                
          </main>
          <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Richard Flores</h3>
          </footer>
        </body>
        </html>
        `;
    };