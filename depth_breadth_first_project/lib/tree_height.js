// function treeHeight(root) {
//     if (!root) return -1;
//     let maxEdges = 0;
//     let queue = [root];
//     while (queue.length) {
//         let node = queue.shift();
//         if (node.left || node.right) maxEdges += 1;
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return maxEdges;
// }

function treeHeight(root) {
    if (!root) return -1;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
    // let left, right;
    // let edges = 0;
    // if (root.left) {
    //     edges += 1;
    //     left = treeHeight(root.left); 
    // } else {
    //     left = 0;
    // }
    // if (root.right) {
    //     edges += 1;
    //     right = treeHeight(root.right);
    // } else {
    //     right = 0;
    // }
    // return (left >= right) ? left + edges: right + edges;
}


module.exports = {
    treeHeight
};