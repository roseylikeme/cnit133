$(document).ready(function () {
    closeNav();
    $('.hwParts').hide();
    $('.overview').show();

    $('.btn-class').click(function () {
        showSection($(this).attr('data-target'));
    });

    $('#results').hide();
    $('#resultsPt2').hide();

    part1a();
    part1b();
});

function showSection(targetId) {
    $('.hwParts').hide();
    $('#' + targetId).show();
    $('.btn-class').removeClass('activeSubMenuButton');
    $('[data-target="' + targetId + '"]').addClass('activeSubMenuButton');
}

function part1a() {
    // Use the for loop statement that calculates the product and sum of every fourth integer from 5 to 25 inclusive.
    let product = 1;
    let sum = 0;

    // Iterate through the numbers from 5 to 25 with a step of 4
    for (let num = 5; num < 26; num += 4) {
        product *= num;  // Calculate the product
        sum += num;  // Calculate the sum
    }

    // Display the results
    $('#pt1a').text(`Product of every fourth integer is:`);
    $('#pt1product').text(`${product.toLocaleString()}`)
    $('#pt1ab').text(`Sum of every fourth integer is:`);
    $('#pt1sum').text(`${sum}`)
}

function part1b() {
    let sumOfThirds = 0;
    let productOfThirds = 1;

    let currentInteger = 3;

    // Use a while loop
    while (currentInteger <= 18) {
        // Calculate sum
        sumOfThirds += currentInteger;
        // calc product
        productOfThirds *= currentInteger;
        // increment current int by 3
        currentInteger += 3;
    }
    // display results
    $('#pt1bproduct').text(`Product of every third integer: ${productOfThirds.toLocaleString()}`);
    $('#pt1bsum').text(`Sum of every third integer: ${sumOfThirds}`);
}