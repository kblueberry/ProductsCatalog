import "./UiCheckbox.scss";
import { ActionNames } from "../../../mock-tool/ConstantsConfig";

export function UiCheckbox() {
  return (
    <div className="form-check form-check-reverse">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="reverseCheck1"
      ></input>
      <label
        className="form-check-label detail_label_small"
        htmlFor="reverseCheck1"
      >
        {ActionNames.compareProduct}
      </label>
    </div>
  );
}
