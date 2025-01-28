import { RootState } from "@/app/store/store";

export const getUsername = (state: RootState) => state.user.authData?.username