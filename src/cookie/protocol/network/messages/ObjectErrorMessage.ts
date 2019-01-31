import Message from "@/protocol/network/messages/Message";

export default class ObjectErrorMessage extends Message {
  public reason: number;

  constructor(reason = 0) {
    super();
    this.reason = reason;
  }
}
