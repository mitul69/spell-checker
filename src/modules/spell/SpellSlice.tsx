import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../stores';
import { SpellDetailInterface } from './models/SpellDetailInterface';
import { SpellInterface } from './models/SpellInterface';
import { getSpellDetail, getSpellList } from './SpellAPI';

export interface SpellStateInterface{
  spells: SpellInterface[];
  favourites: SpellDetailInterface[];
  totalRecord : number;
  status: 'idle' | 'loading' | 'failed';
  detail : SpellDetailInterface
}

const initialState: SpellStateInterface = {
  spells: [],
  favourites: [],
  totalRecord: 0,
  status: 'idle',
  detail : {
    index : "", 
    name : "", 
    url : "", 
    desc: [""]
  }
};

export const getSpellListAsync = createAsyncThunk(
  'spell/list',
  async () => {
    const response = await getSpellList();
    return response.data;
  }
);
export const getSpellDetailAsync = createAsyncThunk(
  'spell/detail',
  async (index: string) => {
    const response = await getSpellDetail(index);
    return response.data;
  }
);

export const spellSlice = createSlice({
  name: 'spell',
  initialState,
  reducers: {
    addToFavouriteList: (state, action) => {
      state.favourites = [...state.favourites, {...action.payload}]
    },
    removeFromFavouriteList: (state, action) => {
      const favourites = state.favourites.filter(spell => spell.index !== action.payload);
      state.favourites = favourites
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpellListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSpellListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.spells = action.payload.results;
        state.totalRecord = action.payload.count
      })
      .addCase(getSpellListAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getSpellDetailAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSpellDetailAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detail = action.payload;
      })
      .addCase(getSpellDetailAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addToFavouriteList, removeFromFavouriteList } = spellSlice.actions;
export const SpellState = (state: RootState) => state.spell;
export default spellSlice.reducer;
