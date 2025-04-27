function getCurrentTime() {
    var currentdate = new Date(); 
    var time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return time
}
export { getCurrentTime }