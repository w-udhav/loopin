import axiosInstance from "../utils/axiosInstance";
/**
 * Fetches the data for a specific day.
 * @param {string} date - The date in YYYY-MM-DD format.
 * @returns {Promise<Object>} - The data for the specified day.
 */

export const fetchDayData = async (date) => {
  const res = await axiosInstance.get(`/day/${date}`);
  return res.data;
};
