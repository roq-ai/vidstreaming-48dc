interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Subscriber', 'Guest Viewer'],
  tenantName: 'Client',
  applicationName: 'VidStreaming',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage clients'],
  getQuoteUrl: 'https://app.roq.ai/proposal/577cda6c-edbe-4b26-add4-59b70800b4ee',
};
