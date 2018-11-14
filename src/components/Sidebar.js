import React from 'react'

import User from '../containers/User'

const Sidebar = ({ contacts }) => {
  // console.log('Rendering Sidebar with contacts: ')

  return (
    <aside className="sidebar">
      { 
        contacts.map(contact => {
          return <User user={contact} key={contact.user_id} />
        }) 
      }
    </aside>
  )
}

export default Sidebar