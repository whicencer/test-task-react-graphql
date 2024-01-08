import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/stateSchema";
import { ReactNode } from "react";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

function StoreProvider({children, initialState}: StoreProviderProps) {
	const store = createReduxStore(initialState as StateSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
}

export default StoreProvider;