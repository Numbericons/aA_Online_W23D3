function breadthFirstArray(root) { //
    let retArr = [];
    let queue = [root]; // [a]
    while (queue.length) { // [f]
        let node = queue.shift(); //f
        retArr.push(node.val); //[a, b, c, d, e, f]
        if (node.left) queue.push(node.left); //[]
        if (node.right) queue.push(node.right); // []
    }
    return retArr; // [a, b, c, d, e, f]
}

module.exports = {
    breadthFirstArray
};