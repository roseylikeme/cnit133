$(document).ready(function () {
    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', 'legendRadioBtns');
    radioLabel.className = 'label-extended mt-3';

    // Define colors
    const colors = ['#dae4ed', '#e9f6e9', '#e9e9f6', '#f6e9e9'];

    // Get the colorSwatch container
    const colorSwatch = document.getElementById('colorSwatch');

    // Dynamically create radio buttons
    colors.forEach((color, index) => {
    const radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.id = `color-${index + 1}`;
    radioBtn.name = 'color';
    radioBtn.value = `color-${index + 1}`;

    const label = document.createElement('label');
    label.htmlFor = `color-${index + 1}`;

    const span = document.createElement('span');
    span.style.backgroundColor = color;

    const img = document.createElement('img');
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg';
    img.alt = 'Checked Icon';

    span.appendChild(img);
    label.appendChild(span);

    colorSwatch.appendChild(radioBtn);
    colorSwatch.appendChild(label);
    });

    // Add event listener to update styles on radio button change
    colorSwatch.addEventListener('change', (event) => {
    const selectedColor = event.target.value;
    const divToApplyStyles = document.getElementById('divToApplyStylesTo');
    
    // Update background color based on the selected radio button
    divToApplyStyles.style.backgroundColor = colors[selectedColor.split('-')[1] - 1];
    });

    // Use jQuery to handle change events
    $('#colorSwatch').on('change', 'input[type="radio"]', function (event) {
        const selectedColor = $(event.target).val();
        $('#divToApplyStylesTo').css('backgroundColor', colors[selectedColor.split('-')[1] - 1]);
    });

    // Use jQuery to handle checkbox change events
    $('#underlineCheckbox, #boldCheckbox, #italicCheckbox').on('change', updateTextStyle);

    // Use jQuery to handle select change event
    $('#fontSizeSelect').on('change', function () {
        const selectedFontSize = $(this).val();
        $('#divToApplyStylesTo').css('fontSize', `${selectedFontSize}px`);
    });

    function updateTextStyle() {
        const divToApplyStyles = $('#divToApplyStylesTo');

        // Update text styles based on checkbox states
        divToApplyStyles.css({
            textDecoration: $('#underlineCheckbox').prop('checked') ? 'underline' : 'none',
            fontWeight: $('#boldCheckbox').prop('checked') ? 'bold' : 'normal',
            fontStyle: $('#italicCheckbox').prop('checked') ? 'italic' : 'normal',
        });
    }
});
