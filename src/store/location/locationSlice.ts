import { LatLngLiteral } from 'leaflet';
// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state

export interface LocationInfo {
  LatLng: LatLngLiteral;
  name: string;
  locationType: string;
  logo: File | undefined;
}
interface LocationState {
  sharedLocations: LocationInfo[];
}

// Define the initial state using that type
const initialState: LocationState = {
  sharedLocations: [],
};
export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setNewSharedLocation: (state, action: PayloadAction<LocationInfo>) => {
      state.sharedLocations.push(action.payload);
    },
  },
});

export const { setNewSharedLocation } = locationSlice.actions;

export const selectSharedLocations = (state: RootState) => state.location.sharedLocations;

export default locationSlice.reducer;
