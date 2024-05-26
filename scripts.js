function toggleStory(storyId) {
    var storyElement = document.getElementById(storyId);
    if (storyElement) {
        var fullText = storyElement.querySelector('.full-text').innerHTML;
        var imageSrc = storyElement.querySelector('img').src;
        var title = storyElement.querySelector('h2').innerText;
        var audioSrc = storyElement.querySelector('audio').src;

        var expandedView = document.getElementById('expanded-view');
        expandedView.innerHTML = `
            <img src="${imageSrc}" alt="Thumbnail for ${title}">
            <h2>${title}</h2>
            <div class="content">
                <div class="text">${fullText}</div>
            </div>
            <audio controls src="${audioSrc}"></audio>
            <button class="close-btn" onclick="closeExpandedView()">Close</button>
        `;

        expandedView.style.display = 'flex';
        setTimeout(() => {
            expandedView.style.opacity = '1';
        }, 0);
    } else {
        console.error('Story element not found:', storyId);
    }
}

function closeExpandedView() {
    var expandedView = document.getElementById('expanded-view');
    expandedView.style.opacity = '0';
    setTimeout(() => {
        expandedView.style.display = 'none';
    }, 300); // Match the transition duration
}

function togglePlayPause(storyId) {
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    if (audioElement) {
        if (audioElement.paused) {
            audioElement.play();
            button.textContent = 'Pause';
        } else {
            audioElement.pause();
            button.textContent = 'Play';
        }
    } else {
        console.error('Audio element not found:', storyId);
    }
}

function updateButtonText(storyId) {
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    if (audioElement.paused) {
        button.textContent = 'Play';
    } else {
        button.textContent = 'Pause';
    }
}

function resetButtonText(storyId) {
    var audioElement = document.getElementById('audio-' + storyId);
    var button = document.getElementById('listen-btn-' + storyId);
    if (audioElement.paused) {
        button.textContent = 'Play';
    } else {
        button.textContent = 'Pause';
    }
}

function downloadAudio(storyId) {
    var audioSrc = document.getElementById('audio-' + storyId).src;
    var link = document.createElement('a');
    link.href = audioSrc;
    link.download = storyId + '.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
