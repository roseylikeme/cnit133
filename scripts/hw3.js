$(document).ready(function () {
    closeNav();
    $('.hwParts').hide();
    $('.overview').show();

    $('.btn-class').click(function () {
        showSection($(this).attr('data-target'));
    });

    $('#results').hide();

    $('#calculateBtn').click(function () {
        calculateAndDisplayResult();
    });

    $('#clearBtn').click(function () {
        clearInputsAndError();
    });
});

function showSection(targetId) {
    $('.hwParts').hide();
    clearInputsAndError();
    $('#' + targetId).show();
    $('.btn-class').removeClass('activeSubMenuButton');
    $('[data-target="' + targetId + '"]').addClass('activeSubMenuButton');
}

function clearInputsAndError() {
    console.log('clearInputsAndError function called');
    $('#hwAverage, #midtermExam, #finalExam, #participation').val('');
    $('#results').hide();
    $('.btn-class').removeClass('activeSubMenuButton');
}

function checkValidInput() {
    const inputValues = {
        hwAverage: parseInt($('#hwAverage').val()),
        midtermExam: parseInt($('#midtermExam').val()),
        finalExam: parseInt($('#finalExam').val()),
        participation: parseInt($('#participation').val())
    };

    const isValid = Object.values(inputValues).every(val => !isNaN(val) && val >= 0 && val <= 100);

    if (isValid) {
        calculateGradeAverage(inputValues);
    } else {
        $('#results').text('Please enter valid numbers between 0 and 100').show();
    }
}

function calculateGradeAverage(inputValues) {
    const finalGradeAverage = Math.round((inputValues.hwAverage * 0.5) + (inputValues.midtermExam * 0.2) + (inputValues.finalExam * 0.2) + (inputValues.participation * 0.1));

    const gradeRanges = {
        A: { min: 90, max: 100 },
        B: { min: 80, max: 89 },
        C: { min: 70, max: 79 },
        D: { min: 60, max: 69 },
        F: { min: 0, max: 59 }
    };

    let letterGrade = '';

    for (const grade in gradeRanges) {
        if (finalGradeAverage >= gradeRanges[grade].min) {
            letterGrade = grade;
            break;
        }
    }

    const retakeMessage = (letterGrade === 'D' || letterGrade === 'F') ? '\nStudent must retake the course' : '';

    $('#results').css('white-space', 'pre-line').text(
        'Your grade average is ' + finalGradeAverage +
        '\nLetter Grade: ' + letterGrade + retakeMessage
    ).show();
}

function calculateAndDisplayResult() {
    checkValidInput();
}
