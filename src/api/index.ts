import axios, { AxiosInstance } from 'axios';
import {
  IObjMenuHeader,
  IObjBenefit,
  // IObjProcessWork,
  IObjExBuiltToSpec,
  IObjPricing,
  IObjFAQ,
  IObjPrivacyPolicy,
} from '../interface';

const instanceAxios: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ||
    process.env.REACT_APP_IS_USE_PROXY === 'true'
      ? '/api'
      : `${process.env.REACT_APP_URL_API_SERVER}/api`,
});

export const getListObjMenuHeader = async () => {
  try {
    const response = await instanceAxios.get<IObjMenuHeader[]>(
      '/resource/menu-header',
    );
    return response.data;
  } catch (e) {}
};

export const getListObjBenefit = async () => {
  try {
    const response =
      await instanceAxios.get<IObjBenefit[]>('/resource/benefit');
    return response.data;
  } catch (e) {}
};

// export const getListObjProcessWork = async () => {
//   try {
//     const response = await instanceAxios.get<IObjProcessWork[]>(
//       '/resource/process-work',
//     );
//     return response.data;
//   } catch (e) {}
// };

export const getListObjExBuiltToSpec = async () => {
  try {
    const response = await instanceAxios.get<IObjExBuiltToSpec[]>(
      '/resource/built-to-spec',
    );
    return response.data;
  } catch (e) {}
};

export const getListObjPricing = async () => {
  try {
    const response =
      await instanceAxios.get<IObjPricing[]>('/resource/pricing');
    return response.data;
  } catch (e) {}
};

export const getListCapability = async () => {
  try {
    const response = await instanceAxios.get<string[]>('/resource/capability');
    return response.data;
  } catch (e) {}
};

export const getListObjFAQ = async () => {
  try {
    const response = await instanceAxios.get<IObjFAQ[]>('/resource/faq');
    return response.data;
  } catch (e) {}
};

export const getListObjPrivacyPolicy = async () => {
  try {
    const response = await instanceAxios.get<IObjPrivacyPolicy[]>(
      '/resource/privacy-policy',
    );
    return response.data;
  } catch (e) {}
};
