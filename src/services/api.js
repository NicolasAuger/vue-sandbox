export const getProfile = async (battletag) => {
  let response = await fetch(
    `https://ow-api.com/v1/stats/pc/eu/${battletag}/complete`
  );
  return response.json();
}
