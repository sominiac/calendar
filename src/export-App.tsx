import { createBridgeComponent } from "@module-federation/bridge-react/v19";

import App from "./App";

const provider = createBridgeComponent({
  rootComponent: App,
});

export default provider;
