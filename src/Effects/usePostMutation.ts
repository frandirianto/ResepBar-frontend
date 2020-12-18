import Axios from "axios";
import { useMutation } from "react-query";

export default function usePostMutation(
    route: string,
    onSuccess: (response: any) => void,
    withFiles?: boolean
) {
    return useMutation(
        async (data: Object | FormData) => {
            return withFiles
                ? await Axios.post(route, data, {
                      headers: {
                          "content-type": "multipart/form-data",
                      },
                      withCredentials: true,
                  })
                : await Axios.post(
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
