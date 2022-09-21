import { ToastsActionsType } from "./types";
export type ToastType = "success" | "error" | "warning";

export const showToastMessage = (toastType: ToastType, error: string) => ({
  type: ToastsActionsType.SHOW_TOAST_MESSAGE,
  payload: { toastType, error },
});
