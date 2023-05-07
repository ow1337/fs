// authStore.jsx

import create from 'zustand';
import zukeeper from 'zukeeper';
import { getUser, performLogin, performLogout } from '../utils/userAPI';

const useAuthStore = create(zukeeper((set, get) => ({
  isLoggedIn: false,
  user: null,
  login: async (username, password) => {
    try {
      const user = await performLogin(username, password);
      set({ isLoggedIn: true, user });
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    try {
      await performLogout();
      localStorage.removeItem('token');
      set({ isLoggedIn: false, user: null });
    } catch (error) {
      console.error(error);
    }
  },
  setUser: (user) => {
    set({ user });
  },
  getUser: async () => {
    try {
      const user = await getUser();
      set({ user });
    } catch (error) {
      console.error(error);
    }
  },
  checkLoggedIn: () => {
    return get().isLoggedIn;
  },
})));

window.store = useAuthStore;

export { useAuthStore };
