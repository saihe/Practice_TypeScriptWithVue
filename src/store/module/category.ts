import { Category } from "@/types/category";
import { getter, Module, mutation, VuexModule } from "vuex-class-component";

@Module({ namespacedPath: "category/" })
export class CategoryStore extends VuexModule {
  public name = "category";
  @getter
  public categories: Array<Category> = [];

  public constructor() {
    super();
    this.fetchCategories();
  }

  @mutation
  public fetchCategories(): void {
    this.categories = [
      { text: "雑費", value: 1 },
      { text: "食費", value: 2 },
      { text: "交通費", value: 3 },
    ];
  }
}

const categoryStore = new CategoryStore();
export default categoryStore;
