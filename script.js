$(document).ready(function() {
    $('#testAndButton').click(function() {
        var andInputA = $('#andInputA').val() === 'true';
        var andInputB = $('#andInputB').val() === 'true';
        var andResult = andInputA && andInputB;
        $('#andResult').text(andResult.toString());
    });

    $('#testOrButton').click(function() {
        var orInputA = $('#orInputA').val() === 'true';
        var orInputB = $('#orInputB').val() === 'true';
        var orResult = orInputA || orInputB;
        $('#orResult').text(orResult.toString());
    });

    $('#testXorButton').click(function() {
        var xorInputA = $('#xorInputA').val() === 'true';
        var xorInputB = $('#xorInputB').val() === 'true';
        var xorResult = (xorInputA || xorInputB) && !(xorInputA && xorInputB);
        $('#xorResult').text(xorResult.toString());
    });

    $('#testNotButton').click(function() {
        var notInput = $('#notInput').val() === 'true';
        var notResult = !notInput;
        $('#notResult').text(notResult.toString());
    });
});