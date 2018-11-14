import React from 'react'

import Empty from './Empty'
import ChatWindow from './ChatWindow'

const Main = ({ user, activeUserId }) => {
  console.log('Rendering Main with active user id:',activeUserId)

  const renderMainContent = () => {
    if (!activeUserId) {
      console.log('No activeUserId, moving from Main to Empty')
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      console.log('Yes activeUserId, moving from Main to ChatWindow',activeUserId)
      return <ChatWindow activeUserId={activeUserId} />
    }
  }
  return <main className="Main">{renderMainContent()}</main>
}

export default Main