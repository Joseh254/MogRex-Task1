import DashboardLayout from './COMPONENTS/DashboardLayout/DashboardLayout.JSX'
import UserAcquisition from './COMPONENTS/UserAcquisition/UserAcquisition'
import TransactionVolume from './COMPONENTS/TransactionVolume/TransactionVolume'
import MerchantAcquisition from './COMPONENTS/MerchantAcquisition/MerchantAcquisition'

import './App.css'

function App() {


  return (
    <>
     <DashboardLayout>
      <UserAcquisition />
      <TransactionVolume />
      <MerchantAcquisition />
    </DashboardLayout>
    </>
  )
}

export default App
