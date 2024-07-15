import './app.css'
import { ErrorBoundary, LocationProvider, Route, Router } from 'preact-iso'
import Home from './pages/Home'
import Why from './pages/Why'
import Layout from './components/Layout';
import GeneralFormula from './pages/GeneralFormula';

export function App() {
  interface RouteWithLayoutProps {
    component: React.ComponentType;
  }
  const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({ component: Component}) => {
    return (
      <Layout>
        <Component />
      </Layout>
    )
  }

  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={() => <RouteWithLayout component={Home} />} />
          <Route path="/generalformula" component={() => <RouteWithLayout component={GeneralFormula} />} />
          <Route path="/why" component={() => <RouteWithLayout component={Why} />} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}
