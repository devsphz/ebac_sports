import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Game } from '../App'

interface CarrinhoState {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload
      if (!state.itens.find(item => item.id === jogo.id)) {
        state.itens.push(jogo)
      } else {
        alert('Item já está no carrinho')
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload)
    },
  },
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
