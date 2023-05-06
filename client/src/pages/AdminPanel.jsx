import React from 'react'
// import Sidebar from '../components/adminPanelComponents/Sidebar'
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';

const menuItemStyles = {
  button: ({ level, active, disabled }) => {
    // only apply styles on first level elements of the tree
    if (level === 0)
      return {
        color: '#d359ff',
        backgroundColor: '#eecef9',
      };
  },
}

const AdminPanel = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  console.log({ ...menuItemStyles })
  return (
    <div style={{ display: 'flex', maxHeight: 'max-content' }}>
      <Sidebar backgroundColor='#000' breakPoint='lg' rootStyles={{marginTop: '70px'}}>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem
            > Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
        <button onClick={() => toggleSidebar()}>toggle</button>
      </main>
    </div>
  );
}

export default AdminPanel