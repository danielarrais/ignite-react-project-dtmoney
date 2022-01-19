import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  font-size: 24px;
  color: #8257e6;
`

function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
      <GlobalStyle />
    </div>
  );
}

export default App;