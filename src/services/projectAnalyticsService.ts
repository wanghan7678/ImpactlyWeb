import { RequestMethod, RestClient } from "./restClient";
import { crudService, CrudServiceType } from "./crudService";
import Analytics from "../models/Analytics";
import RestResponse from "../models/rest/RestResponse";
import { SroiFormValues } from "../models/SROIform";
import { SroiFlow } from "../models/SROIFlow";

export type projectAnalyticsServiceType = CrudServiceType<Analytics>& {
  getSROIFormValuesByAnalyticId: (analyticId: string) => RestResponse<SroiFormValues>;
  copyAnalyticReport: (analyticId: string) => RestResponse<SroiFormValues>;
  createV2: (projectId: string, SROIFlow: SroiFlow) => RestResponse<SroiFormValues>;
};

export const projectAnalyticsService = (
  client: RestClient,
  path: string
): projectAnalyticsServiceType => {
  return {
    ...crudService<Analytics>(client, path),
      async getSROIFormValuesByAnalyticId(analyticId) {
        return await client.fetchJSON(RequestMethod.GET, `${path}/${analyticId}/config`);
    },
      async copyAnalyticReport(analyticId) {
        return await client.fetchJSON(RequestMethod.POST, `${path}/${analyticId}`);
    },
    async createV2(projectId, SROIFlow) {
      return await client.fetchJSON(RequestMethod.POST, `${path}/${projectId}/v2/create`, SROIFlow);
  },
  };
};

export default projectAnalyticsService;
