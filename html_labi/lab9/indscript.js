function f1() {
    let r1 = parseFloat(document.getElementById('r1').value);
    let r2 = parseFloat(document.getElementById('r2').value);
    let total = r1 + r2;
    document.getElementById('result').innerText = total.toFixed(2);
}