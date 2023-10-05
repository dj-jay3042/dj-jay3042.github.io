// Listen for clicks on links
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        history.pushState(null, '', href);
        loadPage(href);
    }
});

// Load the appropriate content when navigating
function loadPage(url) {
    const container = document.querySelector('body');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url.endsWith('.html') ? url : url + '.html', true);
    xhr.send();
}

// Load the initial page based on the URL
loadPage(location.pathname);