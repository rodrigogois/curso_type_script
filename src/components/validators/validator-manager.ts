import Form from "../form";
import IValidatorRuleCallable from "./validator-rule-callable";

export default class ValidatorManager {
  constructor(
    private chainRules: Array<{
      selectorField: string;
      rules: IValidatorRuleCallable[];
      messageInvalid: string;
    }>) {}

  public isValid(): boolean {
    for (const ruleSet of this.chainRules) {
      for (const rule of ruleSet.rules) {
        const value = Form.getValueFromField(ruleSet.selectorField);
        const isValid = rule(value);
        if (!isValid) {
          alert(ruleSet.messageInvalid);
          return false;
        }
      }
    }
    return true;
  }
}
