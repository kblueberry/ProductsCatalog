import { ActionNames } from "../../mock-tool/ConstantsConfig";

export default function UiLoadingSpinner() {
  return <h2 className="text-center">{ActionNames.loadingData}</h2>;
}
