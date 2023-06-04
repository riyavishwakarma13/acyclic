import {create} from "zustand";

interface AuthStore {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    account: string | null;
    setAccount: (account: string | null) => void;
    
}

export const useAuthStore = create<AuthStore>((set) => ({
    loading: true,
    setLoading: (loading) => set({loading}),
    account: null,
    setAccount: (account) => set({account , loading: false}),
}));