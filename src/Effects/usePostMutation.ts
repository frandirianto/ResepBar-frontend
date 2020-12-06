import Axios from "axios";
import { useMutation } from "react-query";

export default function usePostMutation(
    route: string,
    onSuccess: (response: any) => void
) {
    return useMutation(
        async (data: Object) => {
            return await Axios.post(
                route,
                {
                    data,
                },
                {
                    withCredentials: true,
                }
            );
        },
        { onSuccess }
    );
}
