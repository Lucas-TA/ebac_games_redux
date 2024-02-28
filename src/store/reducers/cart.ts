import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'
import { getAllJSDocTagsOfKind } from 'typescript'

type CartState = {
  itens: Game[]
}
const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})
export const { add } = cartSlice.actions
export default cartSlice.reducer
