import categoryStore, { CategoryStore } from "@/store/module/category";
import { Component, Vue } from "vue-property-decorator";

export const MODE = {
  ADD: { title: "追加", submitText: "登録" },
  EDIT: { title: "編集", submitText: "更新" },
} as const;
export type MODE = typeof MODE[keyof typeof MODE];

@Component({})
export default class BalanceListItemDialog extends Vue {
  public dialog = false;
  public selectedItem = {};
  public categoryStore: CategoryStore = categoryStore;
  public date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substring(0, 10);
  public datePicker = false;
  public title = "";
  public submitTitle = "";
  public amount = 0;
  public snackbar = false;

  public open(m: MODE): void {
    this.title = m.title;
    this.submitTitle = m.submitText;
    this.dialog = true;
  }
  public close(): void {
    this.dialog = false;
  }

  public submit(): void {
    this.dialog = false;
    this.$emit("snackbar", true);
  }
}
