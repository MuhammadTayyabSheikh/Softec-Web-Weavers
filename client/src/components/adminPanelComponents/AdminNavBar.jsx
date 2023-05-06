import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks } from '../../constants';
import { CartFill, ChevronDown, Heart, HeartFill } from 'react-bootstrap-icons';
import { logo } from '../../assets';

function AdminNavBar(props) {
  const [image, setImage] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <>
      <nav
        className='sticky-top w-100 py-3 navbar navbar-expand-lg background-dark w-100'
        style={{
          display: 'flex',
          alignItemsCenter: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to={'/'}>
          <img
            src={logo}
            alt=''
            width={'200px'}
            className='img-fluid pulse d-none d-lg-inline'
          />
          <img
            src={logo}
            alt=''
            width={'150px'}
            className='img-fluid pulse d-inline d-lg-none'
          />
        </Link>

        <button
          className='btn btn-sm background-secondary rounded-pill px-4 py-2 text-white ml-auto mr-3'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add Inventory
        </button>
        <Link to={'/login'} className='' id='navbarNav'>
          <button className='btn btn-sm background-secondary rounded-pill px-4 py-2 text-white'>
            logout
          </button>
        </Link>
      </nav>
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
    </>
  );
}

export default AdminNavBar;
