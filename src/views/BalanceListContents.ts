import { Component, Vue } from "vue-property-decorator";
import { Balance } from "@/types/balance";

@Component({})
export default class BalanceListContents extends Vue {
  private _balances: Array<Balance> = [];

  public created(): void {
    this._balances = [
      { date: "2022-05-01", amount: 100000, category: "雑費" },
      { date: "2022-05-01", amount: -10000, category: "雑費" },
      { date: "2022-05-02", amount: -5000, category: "雑費" },
      { date: "2022-05-02", amount: -2000, category: "雑費" },
    ];
    this._balances.forEach((b) => this.$store.commit("balance/push", b));
  }

  public get balances(): Array<Balance> {
    this._balances = this.$store.state.balance.balances;
    console.log(this._balances);
    return this._balances;
  }

  public set balances(balances: Array<Balance>) {
    this._balances = balances;
    this._balances.forEach((b) => this.$store.commit("balance/push", b));
  }
}
