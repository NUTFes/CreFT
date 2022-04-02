import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../pages/error/notfound'
import { VanillaPage } from '../pages/vanilla'

export const AppRoute = () => {
  return (
    <Routes>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />

      {/* root */}
      <Route index element={<VanillaPage />} />

      {/* vanilla page */}
      <Route path="vanilla" element={<VanillaPage />} />

    </Routes>
  )
}
