import React from 'react'
import { MenuItem } from 'react-pro-sidebar'

const CustomMenuItem = ({ label, icon }) => {
  return (
    <MenuItem
      icon={icon}
      rootStyles={{
        color: '#b58900',
        backgroundColor: '#002b36',
        transition: 'all 0.2s ease-in-out',
        borderBottom: '1px solid #004556',
        '&:hover': {
          backgroundColor: '#002b36',
        }
      }}
    >
      {label}
    </MenuItem>
  )
}

export default CustomMenuItem