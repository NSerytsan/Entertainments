const btn = document.querySelector('button.button--win')
btn.addEventListener("mouseover", moveHover)

function moveHover() {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    const k = Math.floor(Math.random() * 500) + 1;
    const l = Math.floor(Math.random() * 500) + 1;

    btn.style.right = i + "px"
    btn.style.top = j + "px"
    btn.style.left = k + "px"
    btn.style.left = l + "px"
}