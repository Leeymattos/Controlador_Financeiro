import ModalProvider from '../contexts/ModalContext'
import { PurchaseProvider } from '../contexts/PurchaseContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ModalProvider>
      <PurchaseProvider>
        <Component {...pageProps} />
      </PurchaseProvider>
    </ModalProvider>
  )
}

export default MyApp
