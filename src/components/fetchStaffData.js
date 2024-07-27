import axios from "axios";

export const fetchStaffData = async (staffId, token) => {
  try {
    const response = await axios.get(
      `https://hrportalmiddleware.onrender.com/api/company/staff/single?staffid=${staffId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Error fetching staff data:", error);
    throw error;
  }
};
