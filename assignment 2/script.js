
function calculateBill() {

    var item1 = Number(prompt("Enter First Item Price"));

    var item2 = Number(prompt("Enter Second Item Price"));

    var item3 = Number(prompt("Enter Third Item Price"));

    var totalBill = item1 + item2 + item3;

    var members = Number(prompt("How many family members you are?"));

    var share = totalBill / members;

    if (item1 >= 0 && item2 >= 0 && item3 >= 0 && members > 0) {

        alert("Total Bill: Rs. " + totalBill +
              "\nEach Person Pays: Rs. " + share);

    } else {

        alert("Please enter valid information!");

    }

}
