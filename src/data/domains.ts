export interface Domain {
  name: string;
  available: boolean;
  url?: string; // Optional URL to make the domain clickable
}

export const domains: Domain[] = [
  { name: "glimfox.com", available: true, url: "https://glimfox.com" },
  { name: "siizy.com", available: true, url: "https://siizy.com" },
  { name: "naulton.com", available: true, url: "https://naulton.com" },
  { name: "groovenode.com", available: true, url: "https://groovenode.com" },
  { name: "pdffork.com", available: true, url: "https://pdffork.com" },
  { name: "dappernaut.com", available: true, url: "https://dappernaut.com" },
  { name: "pointhole.com", available: true, url: "https://pointhole.com" },
  { name: "racingcrow.com", available: true, url: "https://racingcrow.com" },
];
