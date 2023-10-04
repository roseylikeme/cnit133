$(document).ready(function () {
    closeNav();
    $('.hwParts').hide();
    $('.overview').show();

    $('.btn-class').click(function () {
        showSection($(this).attr('data-target'));
    });

    $('#results').hide();
    $('#resultsPt2').hide();

  
});

function showSection(targetId) {
    $('.hwParts').hide();
    clearInputsAndError();
    $('#' + targetId).show();
    $('.btn-class').removeClass('activeSubMenuButton');
    $('[data-target="' + targetId + '"]').addClass('activeSubMenuButton');
}

function clearInputsAndError() {
    $('#hwAverage, #midtermExam, #finalExam, #participation').val('');
    $('#results').hide();
    $('.btn-class').removeClass('activeSubMenuButton');
}

