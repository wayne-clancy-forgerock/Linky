chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.type === "SaveCollection")
      console.log("SaveCollection")
    //   chrome.bookmarks.create({'parentId': extensionsFolderId,
    //                            'title': 'Extensions doc',
    //                            'url': 'http://code.google.com/chrome/extensions'});
  }
);