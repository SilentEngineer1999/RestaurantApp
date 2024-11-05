import { useEffect, useState } from "react";
import yelp from "../SearchHelper";

export default () => {
    const [results, setResults] = useState<any[]>([]);
    const [err, setErr] = useState<string | null>(null);
    
    const searchApi = async () => {
      try{
      const response = await yelp.get('c/9185-f1a4-4bba-8c6b');
      setResults(response.data.businesses);
      setErr("");
      }
      catch(e)
      {
        setErr("Something Went wrong");
      }
    }
  
    useEffect(() => {
        console.log("Triggered");
      searchApi();
    }, [])

    return {searchApi, results, err};
}