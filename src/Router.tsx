import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            {/* aplicar o layout em todas as rotas */}
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    );
}