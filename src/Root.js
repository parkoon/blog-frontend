import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './store/configure'

const store = configureStore()

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

export default Root