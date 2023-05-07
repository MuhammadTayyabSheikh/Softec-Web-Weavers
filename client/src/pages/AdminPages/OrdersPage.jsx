import React from 'react';
import Table from '../../components/adminPanelComponents/Table';
import TableDataImage from '../../components/adminPanelComponents/Table/TableDataImage';
import { BiBlock } from 'react-icons/bi';

const OrdersPage = () => {
  console.log('OrdersPage');
  return (
    <div className='d-flex flex-column w-100'>
      <h1 className='font-clash'>Orders List</h1>
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
            <th scope='col' colSpan={'2'}>
              Actions
            </th>
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
            <td>
              <button className='btn btn-success'>Complete Order</button>
            </td>
            <td>
              <button className='btn btn-danger'><BiBlock className='mr-2'/>Blacklist User</button>
            </td>
   \
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
};

export default OrdersPage;
