$(document).ready(() => {
    if ($('#cartProduct #productExist tbody tr').length == 0) {
        $('#productExist')
            .hide();
        $('#empty')
            .css({ 'display': 'flex' })
            .show();
    }
    else {
        $('#productExist')
            .show();
        $('#empty')
            .hide();
    }
});