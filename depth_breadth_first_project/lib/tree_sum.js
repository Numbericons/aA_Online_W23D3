function treeSum(root) {
    if (!root) return 0;
    let sum = 0;
    let queue = [root]; // [a]
    while (queue.length) { // [f]
        let node = queue.shift(); //f
        sum += node.val //[a, b, c, d, e, f]
        if (node.left) queue.push(node.left); //[]
        if (node.right) queue.push(node.right); // []
    }
    return sum; // [a, b, c, d, e, f]
}


module.exports = {
    treeSum
};