// When the window loads, it will run the function to set up the event listener
window.onload = function() {
    // Get the button element by its ID
    const punchButton = document.getElementById('punch-button');
    // Get the audio element by its ID
    const punchSound = document.getElementById('punch-sound');
  
    // Add an event listener to the button that listens for a click event
    punchButton.addEventListener('click', function() {
      // When the button is clicked, play the sound
      punchSound.play();
    });
    window.addEventListener('keydown', function(event) {
        // Check if the key pressed is 'A' or 'a'
        if (event.key === 'A' || event.key === 'a') {
          punchSound.play(); // Play the punch sound
        }
      });
    };

  