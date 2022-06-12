import { useState } from 'react';

export interface Response<T = any> {
	data?: T;
	isLoading: boolean;
	error?: any;
}

export const useResponse = <T>(initial?: Response<T>) =>
	useState<Response<T>>({ ...initial, isLoading: false });
