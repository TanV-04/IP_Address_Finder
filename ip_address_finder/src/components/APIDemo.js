import React, { useState } from "react";

export const APIDemo = () => {
  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    if (!incorrectIP(query)) {
      setError("Invalid IP address format.");
      return;
    }

    setLoading(true);
    setError(null);

    const api = new XMLHttpRequest();
    api.open("GET", `http://ip-api.com/json/${query}`);
    api.onload = function () {
      if (api.status === 200) {
        try {
          const data = JSON.parse(api.responseText);
          setData(data); // set the fetched data to the state
        } catch (e) {
          setError("Failed to parse response");
        }
      } else {
        setError(`error ${api.status}`);
      }
      setLoading(false); // stop loading
    };

    api.onerror = function () {
      setError("network error");
      setLoading(false);
    };
    api.send();
  }

  function incorrectIP(ip) {
    const parts = ip.split(".");
    if (parts.length !== 4) {
      return false;
    }
    return parts.every((part) => {
      const num = Number(part);
      return (
        num >= 0 &&
        num <= 255 &&
        Number.isInteger(num) &&
        part.length === String(num).length
      );
    });
  }

  // construct a Google Maps URL
  const googleMapsURL =
    data && data.lat && data.lon
      ? `https://www.google.com/maps?q=${data.lat},${data.lon}`
      : "#";

  return (
    <div className="mt-60">
      <h1 className="dosis text-5xl mb-5">Look Up Any IP Address</h1>
      <div>
        <input
          placeholder="Enter IP address"
          className="mt-5 text-gray rounded-md px-4 py-2 w-full max-w-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
          name="ipInput"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="ml-3 bg-gray-600 text-white p-2 rounded-sm w-32 transition-transform transform hover:scale-105 hover:bg-gray-700 focus:outline-none mt-3 sm:mt-0"
        >
          Search
        </button>
      </div>

      {loading && <div>loading...</div>}
      {error && <div className="mt-4 text-red-500">{error}</div>}

      {data && (
        <div className="mt-4 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
          <div className="mb-4">
            <strong className="text-gray-800">IP entered</strong>: {data.query}{" "}
          </div>
          <hr />
          <div className="mb-4">
            <strong className="text-gray-800">Status of query</strong>:{" "}
            {data.status}
          </div>
          <hr />
          <div className="mb-4">
            <strong className="text-gray-800">Country</strong>: {data.country}
          </div>
          <hr />
          <div className="mb-4">
            <strong className="text-gray-800">Region</strong>: {data.regionName}
          </div>
          <hr />
          <div className="mb-4">
            <strong className="text-gray-800">City</strong>: {data.city}
          </div>
          <hr />
          <div className="mb-4">
            <strong className="text-gray-800">Time Zone</strong>:{" "}
            {data.timezone}
          </div>
        </div>
      )}

      {data && (
        <div className="mt-4">
          <a
            href={googleMapsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View On Google Maps!
          </a>
        </div>
      )}
    </div>
  );
};
