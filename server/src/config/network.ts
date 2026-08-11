import { networkInterfaces } from "os";

interface ip {
  IPv4: String;
  IPv6: String;
}

function getIpAddr(): String {
  const nets = networkInterfaces();
  const localhost: ip = { IPv4: "", IPv6: "" };
  const network: ip = { IPv4: "", IPv6: ""};

  for (const key in nets) {
    const iFace = nets[key];
    iFace?.map((val) => {
      if (val["internal"])
        localhost[val["family"]] = val["address"];
      else
        network[val["family"]] = val["address"];
    });
  }
  return network["IPv4"];
}
;
export const IPV4 = getIpAddr();
