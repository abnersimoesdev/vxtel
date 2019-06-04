import React from 'react'
import ReactDOM from 'react-dom'
import {StoreContext} from 'redux-react-hook'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from './theme'

import AppRouter from './AppRouter'
import * as serviceWorker from './serviceWorker'
import {makeStore} from './store'

const store = makeStore()

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </StoreContext.Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
