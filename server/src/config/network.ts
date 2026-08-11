import { networkInterfaces } from "os";

function getIpAddr(): Number {
    console.log(networkInterfaces());
    return 0;
}
export const IPV4 = Number(getIpAddr());