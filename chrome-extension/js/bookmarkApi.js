function createFolder() {
    chrome.bookmarks.create(
        {
            'parentId': bookmarkBar.id,
            'title': 'Extension bookmarks'
        },
        function(newFolder) {
            console.log("added folder: " + newFolder.title);
        }
    );
}

function createBookmark(parentId, title, url) {
    chrome.bookmarks.create(
        {
            'parentId': parentId,
            'title': title,
            'url': url
        },
        function(newBookmark) {
            console.log("added folder: " + newFolder.title);
        }
    );
}