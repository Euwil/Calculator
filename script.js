function insert(num) {
    document.form.result.value = document.form.result.value + num;
}
function clean() {
    document.form.result.value = ""
}
function back() {
    let value = document.form.result.value
    document.form.result.value = value.substring(0, value.length-1)
}
function equal() {
    let value = document.form.result.value
    if(value) {
        document.form.result.value = eval(value)
    }
}