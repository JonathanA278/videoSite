
// Select all side videos
const videoItems = document.querySelectorAll('.video-item');
const mainVideo = document.getElementById('mainVideo');
const mainTitle = document.getElementById('mainTitle');
const mainDesc = document.getElementById('mainDesc');

videoItems.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        const title = item.getAttribute('data-title');
        const desc = item.getAttribute('data-desc');

        // Update main video and text
        mainVideo.querySelector('source').setAttribute('src', src);
        mainVideo.load();
        mainVideo.play();
        mainTitle.textContent = title;
        mainDesc.textContent = desc;

        // Optional: highlight selected video
        videoItems.forEach(v => v.classList.remove('active-video'));
        item.classList.add('active-video');
    });
});
