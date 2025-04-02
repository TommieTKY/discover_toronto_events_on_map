async function getEvents() {
  let reqUrl = `https://secure.toronto.ca/cc_sr_v1/data/edc_eventcal_APR?limit=500`;
  let response = await fetch(reqUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

module.exports = {
  getEvents,
};
