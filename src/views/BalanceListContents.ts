import { Component, Vue } from "vue-property-decorator";
import { Balance } from "@/types/balance";

@Component({})
export default class BalanceListContents extends Vue {
  private _balanceList: Record<number, Balance> = [];

  public created(): void {
    this._balanceList = [
      { date: "2022-05-01", amount: 100000, category: "雑費" },
      { date: "2022-05-01", amount: -10000, category: "雑費" },
      { date: "2022-05-02", amount: -5000, category: "雑費" },
      { date: "2022-05-02", amount: -2000, category: "雑費" },
    ];
  }

  public get balanceList(): Record<number, Balance> {
    return this._balanceList;
  }
}
