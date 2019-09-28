import {useEffect, useState} from "react";
import axios from "axios";

export const useRemoteService = (initialUrl, initial) => {
  const [data, setData] = useState(initial);
  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [url]);

  return {data, loading, error, setUrl};
}