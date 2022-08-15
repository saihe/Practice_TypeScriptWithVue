import { Balance } from "@/types/balance";
import { createModule, mutation } from "vuex-class-component";

const VuexModule = createModule({ namespaced: "balance" });
export class BalanceModule extends VuexModule {
  public namespaced = true;
  public balances: Array<Balance> = [];

  public constructor() {
    super();
  }

  @mutation
  public push(balance: Balance): void {
    this.balances.push(balance);
  }
}
