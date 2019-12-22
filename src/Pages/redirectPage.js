import React, { useEffect } from "react";
import queryString from "query-string";
export default function RedirectPage({ match, location }) {
  useEffect(() => {
    console.log(match, location);
    const { code } = queryString.parse(location.search);
    console.log(code);

    return () => {};
  }, []);
  return <div>Just Wait for few seconds</div>;
}
