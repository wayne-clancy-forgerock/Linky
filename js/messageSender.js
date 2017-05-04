var extensionId = "nlaklcfadhjjgnjjadjljjbmhndoijba";

function sendMessage(type, messageObject) {
    chrome.runtime.sendMessage(extensionId, 
        {
            type: type,
            messageObject: messageObject
        },
        function(response) {
            if (typeof reponse != 'undefined' && !response.success)
                handleError(url);
        }
    );
}
