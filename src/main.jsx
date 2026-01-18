import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Cart from './components/Cart'
import Inner from './components/Inner'
import Designer from './components/Designer'

import { useOnlineStatus } from '../util/useOlineStatus'
import userContext from '../util/userContext'
import appStore from '../util/appStore'

import '../index.css'

const App = () => {
  const data1 = useContext(userContext)
  const [username, setusername] = useState(data1)

  useEffect(() => {
    const data = {
      loggedInUser: 'brkfire',
    }
    setusername(data)
  }, [])

  const OnlineStatus = useOnlineStatus()

  if (OnlineStatus === false) {
    return <h1>oops something went wrong</h1>
  } else {
    return (
      <Provider store={appStore}>
        <>
          <userContext.Provider value={username}>
            <Header />
            <Outlet />
          </userContext.Provider>
        </>
      </Provider>
    )
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Designer',
        element: <Designer />,
      },
      {
        path: '/cpp/:Id',
        element: <Inner />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
