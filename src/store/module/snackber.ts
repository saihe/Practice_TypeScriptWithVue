import { getter, Module, mutation, VuexModule } from "vuex-class-component";

@Module({ namespacedPath: "snackbar/" })
export class SnackbarStore extends VuexModule {
  public name = "snackbar";
  @getter
  public state = false;

  public constructor() {
    super();
  }

  @mutation
  public true(): void {
    this.state = true;
  }

  @mutation
  public false(): void {
    this.state = false;
  }
}

const snackbarStore = new SnackbarStore();
export default snackbarStore;
