import axios from 'axios';
import { messages } from 'common/constants';
import { BASE_URL } from 'common/constants/apiUrls';
import { IEvent } from 'common/types';

export const getEvents = async (): Promise<IEvent[]> => {
  try {
    const response = await axios.get<IEvent[]>(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(messages.GENERAL_ERROR);
  }
};
