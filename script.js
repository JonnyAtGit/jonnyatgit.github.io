function showScreen(screenNumber) {
    // Hide all screens
    var screens = document.getElementsByClassName('screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }

    // Show the selected screen
    var selectedScreen = document.getElementById('screen' + screenNumber);
    if (selectedScreen) {
        selectedScreen.classList.add('active');
    }
}
