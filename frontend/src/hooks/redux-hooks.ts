import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/index';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;