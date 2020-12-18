import Axios from "axios";
import { useMutation } from "react-query";
import { getCookie } from "../Utils/cookie";

export default function useGetMutation(
    route: string,
    onSuccess: (response: any) => void,
    getAccess?: boolean
) {
    return useMutation(
        async () => {
            return getAccess
                ? await Axios.get(route, {
                      headers: {
                          Accept: "application/json",
                          Authorization: "Bearer " + getCookie("_t"),
                      },
                  })
                : await Axios.get(route);
        },
        { onSuccess }
    );
}
