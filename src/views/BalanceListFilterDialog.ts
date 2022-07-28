import categoryStore, { CategoryStore } from "@/store/module/category";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class BalanceListFilterDialog extends Vue {
  public dialog = false;
  public selectedItem = {};
  public categoryStore: CategoryStore = categoryStore;

  public open(): void {
    this.dialog = true;
  }
  public close(): void {
    this.dialog = false;
  }
}
