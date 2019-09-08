function inOrderArray(root) { //d
    if (!root) return [];
    let retArr = [];
    retArr = retArr.concat(inOrderArray(root.left)); //[]
    retArr.push(root.val); //[].push("d")
    retArr = retArr.concat(inOrderArray(root.right)); //[]

    return retArr;
}

function postOrderArray(root) {
    if (!root) return [];
    let retArr = [];
    retArr = retArr.concat(postOrderArray(root.left));
    retArr = retArr.concat(postOrderArray(root.right));
    retArr.push(root.val);

    return retArr;
}


module.exports = {
    inOrderArray,
    postOrderArray
};