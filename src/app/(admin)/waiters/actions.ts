"use server";

import { del, get, post, put } from "@/fetch/methods";

export const getWaiters = async () => {
  return get("/admin/waiters");
};

// export const getWaiter = (id: number) => {
//     return get(`${api.getWaiter.url}/${id}`, {
//         needsToken: api.getWaiters.needsToken,
//     });
// };
//
// export const postWaiter = (data: WaiterFormData) => {
//     return post(api.postWaiter.url, data, {
//         needsToken: api.getWaiters.needsToken,
//     });
// };
//
// export const updateWaiter = (data: WaiterFormData) => {
//     // @ts-ignore
//     return put(`${api.deleteWaiter.url}/${data.id}`, data, {
//         needsToken: api.getWaiters.needsToken,
//     });
// };
//
// export const deleteWaiter = async (id: number) => {
//     return del(`${api.deleteWaiter.url}/${id}`, {
//         needsToken: api.getWaiters.needsToken,
//     }).then(async () => await getWaiters());
// };
