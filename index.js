function superbowlWin (arr){
    const obj = arr.find(element => element.result === "W")
    if (obj){
    return obj.year
    }
}
