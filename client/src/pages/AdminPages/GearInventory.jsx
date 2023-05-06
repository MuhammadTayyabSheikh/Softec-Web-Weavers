import React from 'react';
import Table from '../../components/adminPanelComponents/Table';
import TableDataImage from '../../components/adminPanelComponents/Table/TableDataImage';

function GearInventory(props) {
  return (
    <div className='d-flex flex-column w-100'>
      <div className='d-flex justify-content-between align-items-center m-3'>
        <h1 className='font-clash'>Gaming Gear Inventory</h1>
        <button
          className='btn btn-lg bg-primary'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add New
        </button>
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

      {/* Modal  */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Add new Gear
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GearInventory;
