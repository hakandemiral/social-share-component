const copy = (e, itemId) => {
    document.getElementById(itemId).select();
    document.execCommand('copy');

    e.target.innerText = "Copied"

    setTimeout(() => {
    e.target.innerText = "Copy"
    },800)

}