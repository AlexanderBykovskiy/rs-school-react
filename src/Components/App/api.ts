import { typeUserItem, typeUserResponseItem } from "./App.types";

const API_DOMAIN: string = "https://api.github.com";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const requestGetOptions = {
  method: "GET",
  headers: headers,
};

export const getUserList = async (
  itemsPerPage: number = 10,
  pageNumber: number = 0,
): Promise<typeUserItem[] | null> => {
  const url = `${API_DOMAIN}/users?per_page=${itemsPerPage}&page=${pageNumber}`;

  try {
    const response = await fetch(url, requestGetOptions);
    const rawData: typeUserResponseItem[] = await response.json();
    return rawData.map((item) => ({
      id: item.id,
      name: item.login,
      avatarUrl: item.avatar_url,
    }));
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

export const getSearchUserList = async (
  phrase: string,
  itemsPerPage: number = 10,
  pageNumber: number = 0,
): Promise<typeUserItem[] | null> => {
  const url = `${API_DOMAIN}/search/users?per_page=${itemsPerPage}&page=${pageNumber}&q=${phrase}`;

  try {
    const response = await fetch(url, requestGetOptions);
    const rawData: { items: typeUserResponseItem[] } = await response.json();
    return rawData.items.map((item) => ({
      id: item.id,
      name: item.login,
      avatarUrl: item.avatar_url,
    }));
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};
