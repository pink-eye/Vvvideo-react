import { ipcRenderer } from 'electron';
import { StateStorage } from 'zustand/middleware';

class FileStorage implements StateStorage {
	async getItem(name: string) {
		try {
			const item = await ipcRenderer.invoke('store.getItem', name);

			return item;
		} catch (error) {
			console.log('getItem > error', error);
		}
	}
	async setItem(name: string, value: string) {
		try {
			await ipcRenderer.invoke('store.setItem', name, value);
		} catch (error) {
			console.log('setItem > error', error);
		}
	}
	async removeItem(name: string) {
		try {
			await ipcRenderer.invoke('store.setItem', name);
		} catch (error) {
			console.log('removeItem > error', error);
		}
	}
}

export const fileStorage = new FileStorage();
