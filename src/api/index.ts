import axios, { AxiosPromise } from 'axios';
import { ISite } from '../interfaces';

async function handleResponse<T>(axiosPromise: AxiosPromise) {
  const response = await axiosPromise;
  return response.data as T;
}

const api = {
  async getSite(apiKey: string): Promise<{ data: { siteByKey: ISite } }> {
    return handleResponse(
      axios.get(
        `${
          process.env.REACT_APP_API_ENDPOINT || ''
        }?query=query SiteQuery($apiKey: String!) { siteByKey(apiKey: $apiKey) { id name slug pages { id name slug data } flocks { id name slug data } } }&operationName=SiteQuery&variables={"apiKey": "${apiKey}"}`,
      ),
    );
  },
};

export default api;
