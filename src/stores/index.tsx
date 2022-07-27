import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import spellReducer from '../modules/spell/SpellSlice';

export const store = configureStore({
  reducer: {
    spell: spellReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
