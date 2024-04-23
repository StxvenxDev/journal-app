import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import { JournalScreen } from '../components/journal/JournalScreen.jsx';
import { AuthRouter } from './AuthRouter.jsx';

export const AppRouter = () => {
  return (
    <Router >
        <Routes>
            <Route path='/auth/*'element={<AuthRouter />} /> 
            <Route path='/' element={<JournalScreen />} />
        </Routes>;
    </Router>
  )
}
