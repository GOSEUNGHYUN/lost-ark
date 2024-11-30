const URL = `https://developer-lostark.game.onstove.com`;
const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1NTUzMjIifQ.gCQWJZd3hOmaEpcv0UjinTpqgTRs3u6fXDx6afpNxoNqfpnksmeKGTO3iFRbXGOUBJFcKxVu4UEikJORSef7trujSFFR6lxZ8R-rPsXwU5g0cC89rwW3PD9FkXPgnrhfc8fB8PmJGQFRJ6sOy6r1CbGQzF3jB3JN0kgDajfMiAZeoxZ3dE4GznNg1yWPtJGMkJLnrf9-Wg2NRNE1SQCOEfdqRlWcRz8GDMiYYVwhEjHOjQ4ra2ONAHRCGLBEWsrgpx4UlTtFcA6BHm_p-dsh2yNDDabqLVHjiitGNs0rLQIBU4viZTL7BD19k-kJc1w6AFnh7xjp3bSRS6ia8PnYXQ";
const FILTERS = "profiles%2Bequipment%2Bengravings%2Bcombat-skills";

export const getInfoData = async (chaName: string) => {
  const data = await fetch(
    URL + `/armories/characters/${chaName}?filters=${FILTERS}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    }
  ).then((response) => response.json());
  console.log(data);
  return data;
};
