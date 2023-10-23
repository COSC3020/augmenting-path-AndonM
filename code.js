function augmentingPath(graph, start, end) {
    const queue = [start];
    const visited = {};
    visited[start] = true;
    const parent = {};
      while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === end) {
        const path = [];
        let current = end;
        while (current) {
          path.unshift(current);
          current = parent[current];
        }
          return path;
      }
        const neighbors = graph[currentNode];
      if (neighbors) {
        for (const neighbor of Object.keys(neighbors)) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            parent[neighbor] = currentNode;
            queue.push(neighbor);
          }
        }
      }
    }
    return [];
}
