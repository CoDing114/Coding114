var snippets = document.querySelectorAll(".snippet");
[].forEach.call(snippets, function (snippet) {
    snippet.firstChild.insertAdjacentHTML(
        "beforebegin", '<button class="btn" data-clipboard-snippet><i class="clippy fas fa-clipboard" alt="Copy to clipboard"></button>');
});
var clipboardSnippets = new ClipboardJS("[data-clipboard-snippet]", {
    target: function (trigger) {
        return trigger.nextElementSibling;
    },
});
clipboardSnippets.on("success", function (e) {
    e.clearSelection();
    showTooltip(e.trigger, "Copied!");
});
clipboardSnippets.on("error", function (e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});
