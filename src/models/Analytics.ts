import Identifiable from "./Identifyable";
import { SroiFormValues } from "./SROIform";

interface Analytics extends Identifiable {
  name: string;
  parentId: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  reportConfig: SroiFormValues;
  downloadURL: string;
}

export default Analytics;
