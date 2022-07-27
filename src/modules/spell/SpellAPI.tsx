import AxiosInstance from "../../utils/AxiosInstance";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  
export const getSpellList = async () => {
    return await AxiosInstance.get("/spells")
}

export const getSpellDetail = async (index : string) => {
  return await AxiosInstance.get(`/spells/${index}`)
}