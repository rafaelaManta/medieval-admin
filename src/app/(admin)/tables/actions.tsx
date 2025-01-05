"use server";

import { get } from "@/fetch/methods";

export async function getTables() {
  return get("/admin/tables");
}

// export const getTable = (id: number) => {
//   return get(`$/admin/tables/${id}`);
// };

// export const postTable = (data: TablesFormData) => {
//   return post(api.postTable.url, data, {
//     needsToken: api.postTable.needsToken,
//   });
// };
//
// export const updateTable = (data: TablesFormData) => {
//   // @ts-ignore
//   return put(`${api.updateTable.url}/${data.id}`, data, {
//     needsToken: api.updateTable.needsToken,
//   });
// };

// export const deleteTable = async (id: number) => {
//   return del(`${api.deleteTable.url}/${id}`, {
//     needsToken: api.deleteTable.needsToken,
//   }).then(async () => {
//     console.log(api.getTables.url);
//     return await getTables();
//   });
// };
