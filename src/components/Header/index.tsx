import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <div>
      <img src={cesta} alt="Carrinho" />
      <span>
        {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
      </span>
    </div>
  )
}

export default Header
