import { useDispatch, useSelector } from "react-redux";

export function useRootState() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	return [state, dispatch];
}
