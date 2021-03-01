import { configureStore, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Trainer, Umamusume } from '~/types'

type State = {
  trainers: { [id: string]: Trainer }
  umamusumes: { [id: string]: Umamusume }
}

const initialState: State = {
  trainers: {},
  umamusumes: {},
}

const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    insertTrainers: (state, action: PayloadAction<State['trainers'][string][]>) => ({
      ...state,
      trainers: {
        ...state.trainers,
        ...action.payload.reduce(
          (prev, current) => ({
            ...prev,
            [current.id]: current,
          }),
          {}
        ),
      },
    }),
    updateTrainers: (state, action: PayloadAction<State['trainers'][string][]>) => ({
      ...state,
      trainers: {
        ...action.payload.reduce(
          (prev, current) => ({
            ...prev,
            [current.id]: current,
          }),
          {}
        ),
      },
    }),
    updateUmamusume: (state, action: PayloadAction<State['umamusumes'][string][]>) => ({
      ...state,
      umamusumes: {
        ...action.payload.reduce(
          (prev, current) => ({
            ...prev,
            [current.id]: current,
          }),
          {}
        ),
      },
    }),
  },
})

export const actions = slice.actions
export const reducer = slice.reducer

export const store = configureStore({
  reducer,
})

type RootState = ReturnType<typeof store.getState>

export const getTrainerIds = createSelector(
  (state: RootState) => state.trainers,
  (trainers) => Object.keys(trainers)
)

export const getTrainerById = (id: Trainer['id']) =>
  createSelector<RootState, RootState['trainers'], Trainer | undefined>(
    (state: RootState) => state.trainers,
    (trainers) => trainers[id]
  )

export const getUmamusumeById = (id: Umamusume['id']) =>
  createSelector<RootState, RootState['umamusumes'], Umamusume | undefined>(
    (state: RootState) => state.umamusumes,
    (umamusumes) => umamusumes[id]
  )

export const getUmamusumes = createSelector(
  (state: RootState) => state.umamusumes,
  (umamusumes) => Object.values(umamusumes)
)
