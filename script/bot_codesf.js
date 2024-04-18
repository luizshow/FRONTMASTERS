$(document).ready(function() {
    window.addEventListener('dfMessengerLoaded', function (event) {
    $r1 = document.querySelector("df-messenger");
    $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
    $r3 = $r2.shadowRoot.querySelector("df-messenger-user-input"); //for other mods
    var sheet = new CSSStyleSheet;
    sheet.replaceSync( div.chat-wrapper[opened="true"], { height: 500px; border:2px solid rgba(0, 0, 0, 0.5); border-radius: 7px;});
    $r2.shadowRoot.adoptedStyleSheets = [ sheet ];
    });
}); 