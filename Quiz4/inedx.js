function All(arr , callback) {
    if( callback >= arr.length){
        return true ;
    }
    if(arr[callback] <= 0){
        return "less than 0"
    }
    return All(arr , callback+1)
}
console.log(All([1,2,3,0,0] , 0));

