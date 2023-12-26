import { Routes, Route } from 'react-router-dom'
import ContactProfile from './pages/ContactProfile/ContactProfile'
import Home from './pages/Home'

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-contact" element={<ContactProfile />} />
      <Route path="/contact/:id" element={<ContactProfile />} />
    </Routes>
  )
}

export default RoutesProvider
