import http from "../services/referralService";

export const states = [
  { _id: "IL", name: "IL" },
  { _id: "MI", name: "MI" },
  { _id: "WA", name: "WA" },
  { _id: "ID", name: "ID" }
];
export const line = [
  { _id: "Select", name: "Select" },
  { _id: "010", name: "010" },
  { _id: "019", name: "019" }
];
export const company = [
  { _id: "Select", name: "Select" },
  { _id: "010", name: "010" },
  { _id: "027", name: "027" }
];
export const referralCode = [
  { _id: "Select", name: "Select" },
  { _id: "EA430", name: "EA430" },
  { _id: "EA330", name: "EA330" },
  { _id: "EA331", name: "EA331" }
];
export const reason = [
  { _id: "Select", name: "Select" },
  { _id: "reason1", name: "Reason 1" },
  { _id: "reason2", name: "Reason 2" }
];
export const status = [
  { _id: "Select", name: "Select" },
  { _id: "OFF", name: "Off" },
  { _id: "ON", name: "On" }
];

export function getAllReferral() {
  return http.get("http://localhost:8080/getAllReferrals");
}
export function getAllState() {
  return states.filter(g => g);
}
export function getAllLine() {
  return line.filter(g => g);
}
export function getAllCompany() {
  return company.filter(g => g);
}
export function getAllRefCode() {
  return referralCode.filter(g => g);
}
export function getAllReason() {
  return reason.filter(g => g);
}
export function getStatuses() {
  return status.filter(g => g);
}
