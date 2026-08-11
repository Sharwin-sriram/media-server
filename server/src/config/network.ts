import { networkInterfaces } from "os";

interface ip {
  IPv4: String;
  IPv6: String;
}

const localhost: ip = { IPv4: "", IPv6: "" };
const network: ip = { IPv4: "", IPv6: "" };

function fetchNetworks(): void {
  const nets = networkInterfaces();
  for (const key in nets) {
    const iFace = nets[key];
    iFace?.map((val) => {
      if (val["internal"]) localhost[val["family"]] = val["address"];
      else network[val["family"]] = val["address"];
    });
  }
}

fetchNetworks();

export const IPV4 = network["IPv4"];
