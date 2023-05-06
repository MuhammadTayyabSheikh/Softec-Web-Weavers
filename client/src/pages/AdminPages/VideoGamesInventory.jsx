import React, { useEffect, useState } from 'react';
import Table from '../../components/adminPanelComponents/Table';
import TableDataImage from '../../components/adminPanelComponents/Table/TableDataImage';
import { getGames } from '../../api/ItemsAPI';

function VideoGamesInventory(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((res) => {
      setGames(res.items);
    });
  }, []);

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
          {games.map((game,key) => (
            <tr key={key}>
              <TableDataImage />
              <td>{game.title}</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default VideoGamesInventory;
