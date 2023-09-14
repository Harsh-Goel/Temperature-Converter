function run() {
    const cel = document.getElementById("Cvalue").value;
    if (cel == '') {
        alert("Give input");
    }
    else {
        let f = (cel * (9 / 5)) + 32;
        document.getElementById("Fvalue").value = f;
    }
}