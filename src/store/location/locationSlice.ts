import { LatLngExpression } from 'leaflet';
// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state

export interface LocationInfo {
  LatLng: LatLngExpression;
  name: string;
  locationType: string;
  logo: File | undefined;
}
interface LocationState {
  sharedLocations: LocationInfo[];
}

// Define the initial state using that type
const initialState: LocationState = {
  sharedLocations: [
    {
      LatLng: {
        lat: 35.6875572374694,
        lng: 51.35910987854004,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
    {
      LatLng: {
        lat: 35.69689817401091,
        lng: 51.40494346618653,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
    {
      LatLng: {
        lat: 35.6875572374694,
        lng: 51.35910987854004,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
    {
      LatLng: {
        lat: 35.6875572374694,
        lng: 51.35910987854004,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
    {
      LatLng: {
        lat: 35.67040610359466,
        lng: 51.44880294799805,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
    {
      LatLng: {
        lat: 35.667268302231044,
        lng: 51.41095161437988,
      },
      locationType: 'asd',
      name: 'asdsad',
      logo: undefined,
    },
  ],
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
