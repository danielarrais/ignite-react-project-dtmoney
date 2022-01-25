import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web Site</td>
            <td className='deposit'>R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>R$ -1200,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento Web Site</td>
            <td>R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento Web Site</td>
            <td>R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento Web Site</td>
            <td>R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Desenvolvimento Web Site</td>
            <td>R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
