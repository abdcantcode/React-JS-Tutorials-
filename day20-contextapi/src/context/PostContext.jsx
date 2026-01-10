import React, { createContext } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const PostDataContext=createContext()
const PostContext = (props) => {

  
  
  let username='Abdullah'
  return (
    <div>
      <PostDataContext.Provider value={username}>
        {props.children}
      </PostDataContext.Provider>
      
    </div>
  )
}

export default PostContext
