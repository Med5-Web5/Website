import { Web5 } from "@web5/api";

/**
 * @notice connect to med5
 */
export const connectToAstrolith = async (): Promise<any> => {
	// Initiate web5 connect
	const { web5, did } = await Web5.connect({
		sync: "5s",
	});
	return { web5, did };
};
