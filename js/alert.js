function countCheck() {
    const query = 'input[name=movie]:checked'
    const selectedBox = document.querySelectorAll(query);
    const count = selectedBox.length;
    return count;
}

function clickButton() {
    const name = document.getElementById("name").value;
    const count = countCheck();
    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요! 👍");
}
