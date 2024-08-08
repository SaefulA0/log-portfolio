import { useEffect, useState } from "react";

interface ApiResponse {
  // Definisikan tipe data yang diperlukan dari respons API Anda
}

const useApi = (endpoint: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Bersihkan efek jika komponen unmount atau endpoint berubah
    return () => {
      // Cleanup code here
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default useApi;
