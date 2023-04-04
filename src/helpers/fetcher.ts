// Basic fetcher with error handling to use with SWR

export const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network request failed");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error as string);
  }
};
