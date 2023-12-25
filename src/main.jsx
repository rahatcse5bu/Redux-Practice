import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
 <CakeContainer/>

<HooksCakeContainer/>
 </Provider>
  </React.StrictMode>,
)
