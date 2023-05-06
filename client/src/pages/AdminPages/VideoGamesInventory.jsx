import React, { useEffect, useState } from 'react';
import Table from '../../components/adminPanelComponents/Table';
import TableDataImage from '../../components/adminPanelComponents/Table/TableDataImage';
import { getGames } from '../../api/ItemsAPI';
import { AiFillEdit } from 'react-icons/ai';

function VideoGamesInventory(props) {

    const [previewUrl, setPreviewUrl] = useState(null);
    const [image, setImage] = useState("");

  const [games, setGames] = useState([
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description:
        'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.',
      marketPrice: 59.99,
      costPrice: 49.99,
      type: 'VideoGame',
      stock: 10,
      minimumAge: 10,
      image:
        'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheLegendofZeldaBreathoftheWild_image1600w.jpg',
    },
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      description:
        'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.',
      marketPrice: 59.99,
      costPrice: 49.99,
      type: 'VideoGame',
      stock: 10,
      minimumAge: 10,
      image:
        'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheLegendofZeldaBreathoftheWild_image1600w.jpg',
    },
  ]);

  useEffect(() => {
    getGames().then((res) => {
      setGames(res.items);
    });
  }, []);

  return (
    <div className='d-flex flex-column w-100'>
      <div className='d-flex justify-content-between align-items-center m-3'>
        <h1 className='font-clash'>Video Games Inventory</h1>
       
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
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody className=''>
          {games.map((game, key) => (
            <tr key={key}>
              <TableDataImage />
              <td>{game.title}</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <AiFillEdit
                  type='button'
                  data-toggle='modal'
                  data-target='#exampleModal'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
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
                Add Inventory
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
            <div className='modal-body'>
              <form>
                <div className='row'>
                  <div className='col-6'>
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt='Preview'
                        style={{ height: '150px', width: '150px' }}
                      />
                    )}
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label htmlFor='image'>Image File</label>
                      <input
                        type='file'
                        className='form-control-file'
                        id='image'
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setImage(file);
                          setPreviewUrl(URL.createObjectURL(file));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='type'>Type</label>
                  <select className='form-control' id='type'>
                    <option value={'VideoGame'}>Video Game</option>
                    <option value={'GamingGear'}>Gaming Gear</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input type='text' className='form-control' id='title' />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>Description</label>
                  <textarea
                    rows={'3'}
                    className='form-control'
                    id='description'
                  />
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label htmlFor='marketPrice'>Market Price</label>
                      <input
                        type='number'
                        className='form-control'
                        id='marketPrice'
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label htmlFor='costPrice'>Cost Price</label>
                      <input
                        type='number'
                        className='form-control'
                        id='costPrice'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label htmlFor='stock'>Stock</label>
                      <input
                        type='number'
                        className='form-control'
                        id='stock'
                      />
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='form-group'>
                      <label htmlFor='minAge'>Age Limit</label>
                      <input
                        type='number'
                        className='form-control'
                        id='minAge'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
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

export default VideoGamesInventory;
