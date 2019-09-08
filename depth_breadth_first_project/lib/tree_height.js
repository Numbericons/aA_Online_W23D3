function treeHeight(root) {
    if (!root) return -1;
    let maxEdges = 0;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (node.left || node.right) maxEdges += 1;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return maxEdges;
}


module.exports = {
    treeHeight
};