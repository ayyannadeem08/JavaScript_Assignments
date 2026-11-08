function calculateBirthYear() {

    var name = prompt("Enter your name:");

    var age = Number(prompt("Enter your Current Age:"));

    var currentYear = Number(prompt("Enter Current Year:"));

    var birthYear = currentYear - age;

    if (name !== null && name !== "" && age > 0 && currentYear > 0) {

        alert ("Hello " + name + ", Your Birth year is " + birthYear);

    } else {

        alert ("Please Enter Valid Information");
    }
}