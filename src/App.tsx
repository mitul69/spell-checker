import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/index";
import { Container, ThemeProvider } from 'react-bootstrap';
import Header from './modules/common/Header';
import Footer from './modules/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss'

/**
 * Create Main App and configure
 * Theme
 * Router 
 * Header
 * Main Body
 * Footer
 */
function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Container>
          <BrowserRouter>
            <Header />
            <div className='main-area'>
              <AppRoute />
            </div>
            <Footer />
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
