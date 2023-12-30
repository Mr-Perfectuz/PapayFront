import { createSelector } from "reselect";
import { AppRootState } from "../../../types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retreivePausedOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.pausedOrders
)
export const retreiveProcessOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.processOrders
)
export const retreiveFinishedOrders = createSelector(
    selectOrdersPage,
    (ordersPage) => ordersPage.finishedOrders
)