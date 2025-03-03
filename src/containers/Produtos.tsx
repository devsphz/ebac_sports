// src/containers/Produtos.tsx
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../store/api'
import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../store/carrinhoSlice'
import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  const handleAdicionarAoCarrinho = (game: Game) => {
    dispatch(adicionarAoCarrinho(game))
  }

  return (
    <S.Produtos>
      {jogos?.map((game) => (
        <Produto
          key={game.id}
          game={game}
          adicionarAoCarrinho={() => handleAdicionarAoCarrinho(game)}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
