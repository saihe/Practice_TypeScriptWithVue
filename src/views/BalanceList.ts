import { Component, Vue } from "vue-property-decorator";
import BalanceListFilterDialog from "./BalanceListFilterDialog.vue";
import BalanceListContents from "./BalanceListContents.vue";
import BalanceListItemDialog from "./BalanceListItemDialog.vue";
import { MODE } from "./BalanceListItemDialog";

@Component({
  components: {
    BalanceListContents,
    BalanceListFilterDialog,
    BalanceListItemDialog,
  },
})
export default class BalanceList extends Vue {
  $refs!: {
    filter: BalanceListFilterDialog;
    dialog: BalanceListItemDialog;
  };
  public get add(): MODE {
    return MODE.ADD;
  }
  public get edit(): MODE {
    return MODE.EDIT;
  }

  public snackbar = false;
}
