$(document).ready(function () {
    closeNav();
    $('.hwParts').hide();
    $('.overview').show();

    $('.btn-class').click(function () {
        showSection($(this).attr('data-target'));
    });

    $('#results').hide();
    $('#resultsPt2').hide();

    part1();
});

function showSection(targetId) {
    $('.hwParts').hide();
    $('#' + targetId).show();
    $('.btn-class').removeClass('activeSubMenuButton');
    $('[data-target="' + targetId + '"]').addClass('activeSubMenuButton');
}

function part1() {
    // Use the for loop statement that calculates the product and sum of every fourth integer from 5 to 25 inclusive.
    let product = 1;
    let sum = 0;

    // Iterate through the numbers from 5 to 25 with a step of 4
    for (let num = 5; num < 26; num += 4) {
        product *= num;  // Calculate the product
        sum += num;  // Calculate the sum
    }

    // Display the results
    $('#pt1a').text(`The product of every fourth integer from 5 to 25 is:`);
    $('#pt1aa').text(`${product.toLocaleString()}`)
    $('#pt1b').text(`The sum of every fourth integer from 5 to 25 is:`);
    $('#pt1bb').text(`${sum}`)
}