import Axios from "axios";
import { useMutation } from "react-query";

export default function useGetMutation(route: String) {
    return useMutation(async () => {
        await Axios.get(process.env.REACT_APP_DEFAULT_API || "" + route);
    });
}
