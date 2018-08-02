const mark = (grid, i, j, m, n) => {
  if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] != '1') {
      return;
  }
  grid[i][j] = 'x';
  mark(grid, i, j+1, m, n);
  mark(grid, i, j-1, m, n);
  mark(grid, i-1, j, m, n);
  mark(grid, i+1, j, m, n);    
}
const numIslands = (grid) => {
  if(!grid.length || !grid[0].length) return 0;
  let m = grid.length;
  let n = grid[0].length;
  let counts = 0;
  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if(grid[i][j] === '1') {
              ++counts;
              mark(grid, i, j, m, n);
          }
      }
  }
  return counts;
};