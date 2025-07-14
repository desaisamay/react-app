import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

let listItems = ['test1', 'test2', 'test3', 'test4', 'test5'];

function clickDetails(item: string) {
    console.log(item);
}

let renderListItems = listItems.map(item => {return <li className="list-group-item" onClick={() => clickDetails(item)}>{item}</li>})

function getIfListItemsPresent(){
    minPathSum([[1,2,3],[4,5,6],[7,8,9]]);
    if(listItems.length > 0){
        return renderListItems;
}else{
    return <h1>no elements</h1>;
}
}

function minPathSum(grid:any) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue; // start cell
            else if (i === 0) grid[i][j] += grid[i][j - 1]; // only from left
            else if (j === 0) grid[i][j] += grid[i - 1][j]; // only from top
            else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]); // top or left
        }
    }

    return grid[m - 1][n - 1]; // bottom-right cell contains the result
}


function ListGroup(){

    return (
    <>
    <h1>List Items</h1>
    <ul className="list-group">
    {getIfListItemsPresent()}
  </ul>
  </>)
}

export default ListGroup;
