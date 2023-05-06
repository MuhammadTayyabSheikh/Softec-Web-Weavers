import { ArrowRight, Controller, Icon123 } from 'react-bootstrap-icons';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu, menuClasses } from 'react-pro-sidebar';
import CustomMenuItem from './CustomMenuItem';
import CustomMenu from './CustomMenu';
import CustomSubMenu from './CustomSubMenu';
import { IoLogoGameControllerB } from 'react-icons/io';
import { HiShoppingCart } from 'react-icons/hi';
import { GiBigGear } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import { BiCategoryAlt } from 'react-icons/bi';

const CustomSidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar backgroundColor='#002b36' breakPoint='lg' rootStyles={{}}>
        <CustomMenu>
          <CustomSubMenu label="Inventory" icon={<BiCategoryAlt/>}>
            <CustomMenuItem label='Video Games' icon={<IoLogoGameControllerB />} />
            <CustomMenuItem label='Gaming Gear' icon={<GiBigGear/>} />
          </CustomSubMenu>
          <CustomMenuItem label='Orders' icon={<HiShoppingCart/>} />
          <CustomMenuItem label='Customers' icon={<FaUsers/>} />
          <CustomMenuItem label='Complaints' icon={<IoNewspaper/>} />
        </CustomMenu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
        <button onClick={() => toggleSidebar()}>toggle</button>
      </main>
    </div>
  )
}

export default CustomSidebar;