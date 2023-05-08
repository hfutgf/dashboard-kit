import { create } from "zustand";
import { items } from "../services";
import { IData } from "../types";

interface IUseStore {
  data: string;
  last: string;
  users: IData[];
  a: string;
  searching: (value: string) => void;
  sortedPriority: (priority: string) => void;
  sortItem: (value: string) => void;
  pagenation: (value: string) => void;
  first: string;
  pageCount: () => void;
  clickToLeft: () => void;
  clickToRight: () => void;
  options: (id: string) => void;
  editValue: string;
  setEditValue: (value: string) => void;
  removeItem: (value: string) => void;
  option: boolean;
  setOption: (value: boolean) => void;
}

export const data = await items();

export const useStore:any = create<IUseStore>((set) => ({
  users: [...data],
  data,

  a: "all",

  first: "1",

  last: "100",

  editValue: "",

  option: false,
  setOption: (value: boolean) =>
    set(() => {
      return {
        option: value,
      };
    }),

  removeItem: (id: string) =>
    set((state: any) => {
      const items = state.users.filter((item: any) => item.ava !== id);
      state.data.length -= 1;

      if (state.users.length === 1) {
        state.first = "0";
      }
      return {
        users: [...items],
        last: items.length,
      };
    }),

  setEditValue: (value: string) =>
    set(() => {
      return {
        editValue: value,
      };
    }),

  options: (id: string) =>
    set((state) => {
      const user: any = state.users.find((item) => item.ava === id);
      if (state.editValue.length) {
        user.priority = state.editValue;
      }
      return {
        users: [...state.users],
      };
    }),

  pageCount: () =>
    set((state) => {
      let res = state.a === "all" ? "100" : state.a;
      return {
        last: res,
      };
    }),
  clickToRight: () =>
    set((state: any) => {
      state.pageCount();
      const arr = data.slice(
        +state.last - 1,
        +state.last + +(state.a !== "all" ? state.a : 0) - 1
      );
      let count = +state.first + +(state.a !== "all" ? state.a : 0);
      let lastCount = +state.last + +(state.a !== "all" ? state.a : 0);

      if (lastCount > +"100" || count > +"100") {
        count = 97;
        lastCount = 100;
      }
      return {
        users: [...arr],
        first: `${count}`,
        last: `${lastCount}`,
      };
    }),

  clickToLeft: () =>
    set((state: any) => {
      state.pageCount();
      const arr = data.slice(
        +state.last - 1,
        +state.last + +(state.a !== "all" ? state.a : 0) - 1
      );
      let count = +state.first - +(state.a !== "all" ? state.a : 0);
      let lastCount = +state.last - +(state.a !== "all" ? state.a : 0);

      if (lastCount < +"0" || count < +"0") {
        count = 1;
        lastCount = +(state.a !== "all" ? state.a : 0);
      }
      return {
        users: [...arr],
        first: `${count}`,
        last: `${lastCount}`,
      };  
    }),

  sortedPriority: (priority: string) =>
    set((state) => {
      let arr;
      if (priority === "high") {
        state.users = [...data];
        let high = state.users.filter((item) => item.priority === "high");
        arr = high;
      } else if (priority === "low") {
        state.users = [...data];
        let low = state.users.filter((item) => item.priority === "low");
        arr = low;
      } else if (priority === "normal") {
        state.users = [...data];
        let normal = state.users.filter((item) => item.priority === "normal");
        arr = normal;
      } else {
        arr = data;
      }
      return {
        users: [...arr],
      };
    }),

  sortItem: (value: string) =>
    set((state) => {
      let arr;
      if (value === "name") {
        const compare = (a: any, b: any) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        };
        arr = state.users.sort(compare);
      } else if (value === "data") {
        const compare = (a: any, b: any) => {
          if (a.date_of_onliine < b.date_of_onliine) {
            return -1;
          }
          if (a.date_of_onliine > b.date_of_onliine) {
            return 1;
          }
          return 0;
        };
        arr = state.users.sort(compare);
      } else {
        arr = data;
      }
      return {
        users: [...arr],
      };
    }),

  searching: (value: string) =>
    set(() => {
      const input = value.toLowerCase();
      const filter = data.filter((item: { name: string }) => {
        return item.name.toLocaleLowerCase().includes(input);
      });
      return {
        users: [...filter],
      };
    }),

  pagenation: (value: string) =>
    set(() => {
      let arr = data.slice(0, +value);
      if (value === "all") {
        arr = data;
      }
      return {
        last: value,
        users: [...arr],
      };
    }),
}));
