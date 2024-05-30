function toggleStory(storyId) {
    // Get the story element by its ID
    var storyElement = document.getElementById(storyId);
    if (storyElement) {
        // Extract the full text, image source, title, and audio source from the story element
        var fullText = storyElement.querySelector('.full-text').innerHTML;
        var imageSrc = storyElement.querySelector('img').src;
        var title = storyElement.querySelector('h2').innerText;
        var audioSrc = storyElement.querySelector('audio').src;

        // Get the expanded view container
        var expandedView = document.getElementById('expanded-view');
        // Set the inner HTML of the expanded view with the extracted details
        expandedView.innerHTML = `
            <img src="${imageSrc}" alt="Thumbnail for ${title}">
            <h2>${title}</h2>
            <div class="content">
                <div class="text">${fullText}</div>
            </div>
            <audio controls src="${audioSrc}"></audio>
            <button class="close-btn" onclick="closeExpandedView()">Close</button>
        `;

        // Display the expanded view and set its opacity to 1 for the fade-in effect
        expandedView.style.display = 'flex';
        setTimeout(() => {
            expandedView.style.opacity = '1';
        }, 0);
    } else {
        // Log an error if the story element is not found
        console.error('Story element not found:', storyId);
    }
}

function closeExpandedView() {
    // Get the expanded view container
    var expandedView = document.getElementById('expanded-view');
    // Set its opacity to 0 for the fade-out effect
    expandedView.style.opacity = '0';
    // After the transition duration, hide the expanded view
    setTimeout(() => {
        expandedView.style.display = 'none';
    }, 300); // Match the transition duration
}

function togglePlayPause(storyId) {
    // Get the audio element and the button by their IDs
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    if (audioElement) {
        // Toggle play/pause state of the audio element
        if (audioElement.paused) {
            audioElement.play();
            button.textContent = 'Pause'; // Update button text to 'Pause'
        } else {
            audioElement.pause();
            button.textContent = 'Play'; // Update button text to 'Play'
        }
    } else {
        // Log an error if the audio element is not found
        console.error('Audio element not found:', storyId);
    }
}

function updateButtonText(storyId) {
    // Get the audio element and the button by their IDs
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    // Update the button text based on the audio element's state
    if (audioElement.paused) {
        button.textContent = 'Play';
    } else {
        button.textContent = 'Pause';
    }
}

function resetButtonText(storyId) {
    // Get the audio element and the button by their IDs
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    // Reset the button text based on the audio element's state
    if (audioElement.paused) {
        button.textContent = 'Play';
    } else {
        button.textContent = 'Pause';
    }
}

function downloadAudio(storyId) {
    // Get the source URL of the audio element
    var audioSrc = document.getElementById('audio-' + storyId).src;
    // Create a temporary link element for downloading the audio file
    var link = document.createElement('a');
    link.href = audioSrc;
    link.download = storyId + '.mp3'; // Set the download attribute with the desired filename
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link from the body
}

function copyText(storyId, buttonId) {
    var storyElement = document.getElementById(storyId);
    var fullText = storyElement.querySelector('.full-text').innerText;
    navigator.clipboard.writeText(fullText).then(function() {
        var button = document.getElementById(buttonId);
        button.innerText = 'Text Copied!';
        setTimeout(function() {
            button.innerText = 'Copy Text';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
