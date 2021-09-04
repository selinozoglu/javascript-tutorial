const name = "Selin Özoğlu";
const department = "Bilişim";
const salary = 5000;
// böyle yazmak yerine 
//const a = "İsim: " + name + "\n" + "Departman: " +  department + "\n" + "Maas: " + salary;
// böyle de yazılır
//const a = `İsim:${name}\nDepartman:${department}\nMaas:${salary}`;

// const html = "<ul>" + 
//             "<li>" + name + "</li>" + 
//             "<li>" + department + "</li>" +
//             "<li>" + salary + "</li>" +
//             "</ul>";

//             document.body.innerHTML = html;

function a(){
    return "merhaba";
}

const html = `
    <ul>
    <li>${name}</li>
    <li>${department}</li>
    <li>${salary}</li>
    <li>${10 / 4}</li>
    <li>${a()}</li>
    </ul>


`;
document.body.innerHTML = html;