import APILinkedInClient from "./linkedInCore";

const api = new APILinkedInClient();
const linkedInEmail = (params: any) => {
  return api.get(`/v2/emailAddress?q=members&projection=(elements*(handle~))`);
};


export { 
    linkedInEmail, 
};
