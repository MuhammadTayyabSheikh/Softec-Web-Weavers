import React from 'react'

const InventoryPage = () => {
  console.log('InventoryPage');
  return (
    <div className='w-100 p-4'>

      <table className="table table-striped table-hover table-responsive-md">
        <thead>
          <tr className=''>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Market Price</th>
            <th scope="col">Cost Price</th>
            <th scope="col">Type</th>
            <th scope="col">Stock</th>
            <th scope="col">Minimum Age</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            {/* <th scope="row">1</th> */}
            <td className="" style={{ width: '80px' }}>
              <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" className="w-100 radius-2 rounded" alt="Sheep" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InventoryPage;