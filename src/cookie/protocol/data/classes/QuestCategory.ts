import Data from "@/protocol/data/Data";

export default class QuestCategory extends Data {
  public nameId: string = "";
  public order: number = 0;
  public questIds: number[] = [];
}
