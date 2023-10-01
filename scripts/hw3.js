$(document).ready(function () {
    closeNav();
    $('.hwParts').hide();
    $('.overview').show();

    $('.btn-class').click(function () {
        showSection($(this).attr('data-target'));
    });

    $('#results').hide();
    $('#resultsPt2').hide();

    $('#calculateBtn').click(function () {
        calculateAndDisplayResult();
    });

    $('#clearBtn').click(function () {
        clearInputsAndError();
    });

    $('#clearBtnPt2').click(function () {
      // Clear salesperson input
      $('#salesperson').val('');

      // Clear item quantity sold input fields
      $('#item1').val('');
      $('#item2').val('');
      $('#item3').val('');
      $('#item4').val('');

      // Clear quantity sold output fields
      $('#item1-sold').val('');
      $('#item2-sold').val('');
      $('#item3-sold').val('');
      $('#item4-sold').val('');

      // Clear item total output fields
      $('#item1-total').val('');
      $('#item2-total').val('');
      $('#item3-total').val('');
      $('#item4-total').val('');

      // Clear total sold and total earnings fields
      $('#total-sold').val('');
      $('#total-earnings').val('');

      // Clear any previous error message
      $('#resultsPt2').text('').hide();
  });

    // Part two
    $('#salesperson').tooltip({
      content: "Please make sure that the salesperson's name is spelled correctly",
      track: true
    });

    $('#calculateTotalsBtnPt2').click(function () {
      const itemPrices = {
          item1: parseFloat($('#item1Price').text().substring(1)),
          item2: parseFloat($('#item2Price').text().substring(1)),
          item3: parseFloat($('#item3Price').text().substring(1)),
          item4: parseFloat($('#item4Price').text().substring(1)),
      };
  
      const itemsSoldInputValues = {
          item1: parseInt($('#item1').val()),
          item2: parseInt($('#item2').val()),
          item3: parseInt($('#item3').val()),
          item4: parseInt($('#item4').val()),
      };
  
      let errorMessage = '';
  
      // Check for empty or negative input values
      for (const item in itemsSoldInputValues) {
          if (itemsSoldInputValues[item] < 0 || isNaN(itemsSoldInputValues[item])) {
              errorMessage = 'Please enter a valid number of items sold for ' + item + '!';
              break;
          }
      }
  
      if (errorMessage) {
          $('#resultsPt2').text(errorMessage).show();
      } else {
          const itemTotals = {};
          let totalSold = 0;
  
          for (const item in itemsSoldInputValues) {
              itemTotals[item] = (itemsSoldInputValues[item] * itemPrices[item]).toFixed(2);
              totalSold += parseFloat(itemTotals[item]);
  
              // Update quantity sold input fields (notice the corrected IDs)
              $('#' + item + '-sold').val(itemsSoldInputValues[item]);
              $('#' + item + '-total').val(itemTotals[item]);
          }
  
          const totalEarnings = (250 + (totalSold * 0.09)).toFixed(2);
  
          // Update fields
          $('#total-sold').val(totalSold.toFixed(2));
          $('#total-earnings').val(totalEarnings);
  
          // Clear any previous error message
          $('#resultsPt2').text('').hide();
      }
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

