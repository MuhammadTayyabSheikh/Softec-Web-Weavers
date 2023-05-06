import React from 'react';
import Table from '../../components/adminPanelComponents/Table';
import TableDataImage from '../../components/adminPanelComponents/Table/TableDataImage';

function VideoGamesInventory(props) {
  return (
    <div className='d-flex flex-column w-100'>
      <div className='d-flex justify-content-between align-items-center m-3'>
        <h1 className='font-clash'>Video Games Inventory</h1>
        <button className='btn btn-lg bg-primary'>Add New</button>
      </div>
      <Table>
        <thead>
          <tr className=''>
            <th scope='col'>Image</th>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Market Price</th>
            <th scope='col'>Cost Price</th>
            <th scope='col'>Type</th>
            <th scope='col'>Stock</th>
            <th scope='col'>Minimum Age</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <TableDataImage />
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <TableDataImage />
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <TableDataImage />
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default VideoGamesInventory;
